const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        if (process.env.NODE_ENV !== "test") {
            //not running this for now
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        }
    } catch (error) {
        if (process.env.NODE_ENV !== "test") {
            //console.error(`Error ${error}`.red.underline.bold);
            console.error(`Error ${error}`);
        }
        process.exit(1);
    }
};

module.exports = connectDB;
