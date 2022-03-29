export const USER_LOGIN_REQUEST: string = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS: string = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL: string = "USER_LOGIN_FAIL";
export const USER_LOGOUT: string = "USER_LOGOUT";


const userGetLStorage = localStorage.getItem("userInfo");
const userInfoFromStorage = userGetLStorage !== null
    ? JSON.parse(userGetLStorage)
    : null;


const initialState = {
    userLogin: {
        userInfo: userInfoFromStorage,
    },
};

type userLoginType = {
    state: any;
    action: any;
}

export const userLoginReducer = ({state = initialState, action}: userLoginType) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true};
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload};
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

