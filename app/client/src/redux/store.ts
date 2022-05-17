import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import loginReducer from "./login/login-slice";
import surveyReducer from "./survey/survey-slice";

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") || '{}')
    : null;

const initialState = {
    login: {
        loading: false,
        error: false,
        token: userInfoFromStorage ? userInfoFromStorage.token : "",
        username: userInfoFromStorage ? userInfoFromStorage.email : "",
        firstName: userInfoFromStorage ? userInfoFromStorage.firstName : "",
        lastName: userInfoFromStorage ? userInfoFromStorage.lastName : "",
    },
    survey: {
        loading: false,
        error: false,
        persona: "",
    },
}

export const store = configureStore({
    reducer: {

        login: loginReducer,
        survey: surveyReducer,
        // Add the generated reducer as a specific top-level slice
    },
    preloadedState: initialState,
});


// for type safety
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
