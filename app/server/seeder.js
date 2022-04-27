const dotenv = require("dotenv");
const users = require("./data/users");
const persona = require("./data/persona");
const User = require("./model/userModel");
const Persona = require("./model/personaModel");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Persona.deleteMany();

        const personas = await Persona.insertMany(persona);
        const p = personas[0]._id;

        const userAddedPersona = users.map((user) => {
            return {...user, persona: p}
        });

        await User.insertMany(userAddedPersona);

        console.log("Data imported!!");
        process.exit();

    } catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Persona.deleteMany();

        console.log("Data Destroy!");
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}

