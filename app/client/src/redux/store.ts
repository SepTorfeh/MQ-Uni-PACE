import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import loginReducer from "./login/login-slice";

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") || '{}')
    : null;

const initialState = {
    login: {
        loading: false,
        error: false,
        token: userInfoFromStorage ? userInfoFromStorage.token : "",
        username: userInfoFromStorage ? userInfoFromStorage.email : "",
        persona: userInfoFromStorage ? userInfoFromStorage.persona : "",

    },
}

export const store = configureStore({
    reducer: {

        login: loginReducer,
        // Add the generated reducer as a specific top-level slice
    },
    preloadedState: initialState,
});


// for type safety
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
