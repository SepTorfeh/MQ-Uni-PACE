import axios from "axios";
// A function handling an async login request for data
export const fetchUserLogin = async (username: string, password: string) => {
    if (username && password) {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const {data} = await axios.post(
            "/api/user/login",
            {username, password},
            config
        );

        if (data) {
            localStorage.setItem("userInfo", JSON.stringify(data));
            return data.token;
        } else {
            return Promise.reject(data);
        }
    } else {
        return Promise.reject("Please enter valiad username and password");
    }
};
