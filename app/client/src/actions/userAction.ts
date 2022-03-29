import axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from "../reducers/userReducer";


type loginType = {
    email: string;
    password: string;
}

export const login = ({email, password}: loginType) => async (dispatch: any) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const {data} = await axios.post(
            "/api/user/login",
            {email, password},
            config
        );

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (e) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: (e as Error).message,
            //error.response && error.response.data.message
            //? error.response.data.message
            //: error.message,
        });
    }
};
