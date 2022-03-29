import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";
import {userLoginReducer} from "./reducers/userReducer";


const userGetLStorage = localStorage.getItem("userInfo");
const userInfoFromStorage = userGetLStorage !== null
    ? JSON.parse(userGetLStorage)
    : null;


// combineReducers

const reducer = combineReducers({
    // user reducers
    //userLogin: userLoginReducer,
});

const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage,
    },
};


const middleware = [thunk];

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {users: UsersState}
export type AppDispatch = typeof store.dispatch;
