const bcrypt = require("bcryptjs");

const users = [
    {
        name: "sep",
        email: "sep@test.com",
        password: bcrypt.hashSync("sep", 10),
    },
    {
        name: "lance",
        email: "lance@test.com",
        password: bcrypt.hashSync("lance", 10),
    },
];

module.exports = users;
