const morgan = require("morgan");
const path = require("path");
const express = require("express");
const {notFound, errorHandler} = require("./middlewares/errorHandlers");
const userRoutes = require("./routes/userRoutes");
const surveyRoutes = require("./routes/surveyRoutes");

const connectDB = require("./config/db");
connectDB();

const app = express();

//Use morgan to detect http request
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

//Parse json data
app.use(express.json());

// Main Routes
app.use("/api/user", userRoutes);
app.use("/api/survey", surveyRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(path.resolve("./"), "/client/build")));

    app.get("*", (req, res) =>
        res.sendFile(
            path.resolve(path.resolve("./"), "client", "build", "index.html")
        )
    );
} else {
    // Test server
    app.get("/", (req, res) => {
        res.send("API is running");
    });
}

// Error Handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
