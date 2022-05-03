import axios, {AxiosError} from "axios";
// A function handling an async survey submit
export const fetchSurveySubmit = async (persona: string, userData: any) => {

    const userInfoFromStorage = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo") || '{}')
        : null;

    const token = userInfoFromStorage ? userInfoFromStorage.token : "";

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const {data} = await axios.post('/api/survey/submit', {persona, userData}, config);
        localStorage.setItem("userInfo", JSON.stringify(data));
        return data.persona;
    } catch (e) {
        if ((<any>e).isAxiosError) {
            const err = <AxiosError>e;
            return Promise.reject(err.response?.data.message);
        } else {
            return Promise.reject(e);
        }
    }

};

