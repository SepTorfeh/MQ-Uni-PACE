import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import loginReducer from "./login/login-slice";


export const store = configureStore({
    reducer: {

        login: loginReducer,
        // Add the generated reducer as a specific top-level slice
    },
});


// for type safety
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
