export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const initialAuthState = { isLogin: false };

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLogin: true };
    case LOGOUT:
      return { ...state, isLogin: false };
    default:
      return state;
  }
};

export default authReducer;
