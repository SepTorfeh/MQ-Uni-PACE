import axios, {AxiosError} from "axios";
// A function handling an async login request for data
export const fetchUserLogin = async (username: string, password: string) => {
    if (username && password) {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const {data} = await axios.post(
                "/api/user/login",
                {username, password},
                config
            );

            localStorage.setItem("userInfo", JSON.stringify(data));
            //return data.token;
            return data;

        } catch (e) {
            if ((<any>e).isAxiosError) {
                const err = <AxiosError>e;
                return Promise.reject(err.response?.data.message);
            } else {
                return Promise.reject(e);
            }
        }
    } else {
        return Promise.reject("Please enter valid username and password");
    }
};
