const asyncHandler = require("express-async-handler");
const Persona = require("../model/personaModel");
const generateToken = require("../utils/generateToken");

// @desc    process user data submitted by survey
// @route   POST /api/user/survey
// @access  Public
const submit = asyncHandler(async (req, res) => {
    // need to update the name of the personas on the frontend
    const {persona} = req.body;
    const user = req.user;
    const name = persona;
    const updatedPersona = await Persona.findOne({name});

    if (updatedPersona) {
        user.persona = updatedPersona;
        const updatedUser = await user.save();

        if (user) {
            res.status(200).json({
                email: updatedUser.email,
                name: updatedUser.name,
                persona: updatedUser.persona,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new error("user not found");
        }

    } else {
        res.status(401);
        throw new error("persona not found");
    }
});

module.exports = {
    submit,
};
