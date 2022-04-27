const bcrypt = require("bcryptjs");

const users = [
    {
        name: "Sep Torfeh",
        email: "sep@test.com",
        password: bcrypt.hashSync("sep", 10),
    },
    {
        name: "Lance Te",
        email: "lance@test.com",
        password: bcrypt.hashSync("lance", 10),
    },
];

module.exports = users;
