const bcrypt = require("bcryptjs");

const users = [
    {
        firstName: "Sep",
        lastName: "Torfeh",
        email: "sep@test.com",
        password: bcrypt.hashSync("sep", 10),
    },
    {
        firstName: "Lance",
        lastName: "Te",
        email: "lance@test.com",
        password: bcrypt.hashSync("lance", 10),
    },
];

module.exports = users;
