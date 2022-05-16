const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    if (process.env.NODE_ENV === "test") {
        return jwt.sign({id}, "testing", {
            expiresIn: 1800,
        });
    } else {
        return jwt.sign({id}, process.env.JWT_SECRET, {
            expiresIn: 1800,
        });
    }
};

module.exports = generateToken;
