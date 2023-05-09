import { AUTH, LOGIN, LOGIN_ERROR, LOGOUT, SET_USER } from '../constants';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  error: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        id: null,
        login: null,
        email: null,
        isAuth: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error[0],
      };
    default:
      return state;
  }
};

export const setUser = ({ id, login, email }) => {
  return {
    type: SET_USER,
    data: {
      id,
      login,
      email,
    },
  };
};

export const login = (email, password) => ({ type: LOGIN, email, password });
export const logout = () => ({ type: LOGOUT });
export const setLoginError = (error) => ({ type: LOGIN_ERROR, error });
export const auth = () => ({ type: AUTH });
