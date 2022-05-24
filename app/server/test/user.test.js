/**
 * @jest-environment node
 */
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../model/userModel");
const Persona = require("../model/personaModel");
const UseCase = require("../model/useCaseModel");
const users = require("../data/users");
const persona = require("../data/persona");
const use_case = require("../data/use_cases");
const {expect} = require("@jest/globals");

const sampleData = async () => {
    await User.deleteMany();
    await Persona.deleteMany();
    await UseCase.deleteMany();

    const personas = await Persona.insertMany(persona);
    const p = personas[0]._id;

    const useCases = await UseCase.insertMany(use_case);
    const uc = useCases[0]._id;

    const userAddedPersona = users.map((user) => {
        return {...user, persona: p, useCase: uc}
    });

    await User.insertMany(userAddedPersona);
};

describe("Testing user API", () => {
    beforeEach(async () => {
        await sampleData();
    });

    // @desc    logging in using user credentials
    // @route   POST /api/user/login
    // @access  Public (any one can hit this route)
    test("Test user logging", async () => {
        const auth = {
            username: "sep@test.com",
            password: "sep",
        };

        await api
            .post("/api/user/login")
            .send(auth)
            .set("Content-Type", "application/json")
            .expect(200)
            .then(async (res) => {
                const user = res.body;
                const {token} = user;

                expect(user.firstName).toBe("Sep"),
                    expect(user.lastName).toBe("Torfeh")
            });
    })

    afterAll(() => {
        mongoose.disconnect();
    });
});
