import { SET_ERROR, SET_ID, SET_STATUS, SET_USER_PROFILE } from '../constants';

const ADD_POST = 'ADD-POST';
const CHANGE_TEST = 'CHANGE-POST';
export const SAVE_PHOTO = 'SAVE_PHOTO';

const initialState = {
  id: null,
  profile: {},
  currentText: '',
  status: '',
  error: '',
  posts: [
    { id: 1, title: 'Morning', text: 'Lorem Ipsum is simply dummy text ' },
    { id: 2, title: 'Afternoon', text: 'Lorem Ipsum is simplyd ' },
    { id: 3, title: 'Evening', text: 'A galley of tk' },
  ],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 4, title: 'Hello Hola!', text: state.currentText }],
        currentText: '',
      };
    case CHANGE_TEST:
      return {
        ...state,
        currentText: action.text,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_ID: {
      return {
        ...state,
        id: action.id,
      };
    }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SAVE_PHOTO:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: {
            ...state.profile.photos,
            small: action.photo,
          },
        },
      };
    default:
      return state;
  }
};

export const setId = (id) => ({ type: SET_ID, id });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const updateStatus = (status) => ({ type: SET_STATUS, status });
export const setError = (payload) => ({ type: SET_ERROR, payload });
export const savePhoto = (photo) => ({ type: SAVE_PHOTO, photo });

export const changeTextActionCreator = (text) => ({ type: CHANGE_TEST, text });
export const addPostActionCreator = () => ({ type: ADD_POST });
