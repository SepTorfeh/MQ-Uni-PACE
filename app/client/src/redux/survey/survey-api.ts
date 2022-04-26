import axios from "axios";
// A function handling an async survey submit
export const fetchSurveySubmit = async (persona: string) => {

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


    const {data} = await axios.post('/api/survey/submit', {persona}, config);

    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        return data.persona;
    } else {
        return Promise.reject(data);
    }
};

