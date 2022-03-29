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

        await Persona.insertMany(persona);
        await User.insertMany(users);

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

