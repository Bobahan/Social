import { AUTH, LOGIN, LOGIN_ERROR, LOGOUT, SET_USER } from '../constants';

export type InitialStateType = {
  id: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean | null;
  error: string | null;
};

const initialState: InitialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  error: '',
};

export const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetUserType = {
  data: {
    id: number;
    login: string;
    email: string;
  };
  type: typeof SET_USER;
};

export const setUser = ({
  id,
  login,
  email,
}: {
  id: number;
  login: string;
  email: string;
}): SetUserType => {
  return {
    type: SET_USER,
    data: {
      id,
      login,
      email,
    },
  };
};

type LoginType = { type: typeof LOGIN; email: string; password: string };
export const login = (email: string, password: string): LoginType => ({
  type: LOGIN,
  email,
  password,
});

type LogoutType = { type: typeof LOGOUT };
export const logout = (): LogoutType => ({ type: LOGOUT });

type SetLoginErrorType = { type: typeof LOGIN_ERROR; error: string };
export const setLoginError = (error: string): SetLoginErrorType => ({ type: LOGIN_ERROR, error });

type AuthType = { type: typeof AUTH };
export const auth = (): AuthType => ({ type: AUTH });
