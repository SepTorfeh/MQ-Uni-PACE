const mongoose = require("mongoose");

const useCaseSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        }
    }
);

const UseCase = mongoose.model("useCase", useCaseSchema);

module.exports = UseCase;

