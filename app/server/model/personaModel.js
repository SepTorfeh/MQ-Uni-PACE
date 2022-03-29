const mongoose = require("mongoose");

const personaSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        }
    }
);

const Persona = mongoose.model("Persona", personaSchema);

module.exports = Persona;

