const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const Persona = require("../model/personaModel");
const generateToken = require("../utils/generateToken");

// @desc    Auth user & get token
// @route   POST /api/user/login
// @access  Public
const login = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    const email = username;
    const user = await User.findOne({email});
    if (user && (await user.matchPassword(password))) {
        const persona = await Persona.findById(user.persona);
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            persona: persona.name,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

module.exports = {
    login,
};
