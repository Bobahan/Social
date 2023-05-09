import { call, put, takeEvery, select, takeLatest, take, spawn } from '@redux-saga/core/effects';
import { SAVE_PHOTO, savePhoto, setStatus, setUserProfile } from '../reducers/profile-reducer';
import { setTotalUsersCount, setUsers } from '../reducers/users-reducer';
import { profileAPI, usersAPI, authAPI } from '../../api';
import * as selectors from '../selectors';
import { setLoginError, setUser } from '../reducers/auth-reducer';
import {
  AUTH,
  FOLLOW,
  GET_USERS,
  LOGIN,
  LOGOUT,
  SET_ERROR,
  SET_ID,
  UNFOLLOW,
  UPDATE_STATUS,
} from '../constants';

export function* sagaWorkerFollowUnfollow({ type, id }) {
  try {
    switch (type) {
      case 'UNFOLLOW':
        yield call(usersAPI.unfollow, id);
        break;
      case 'FOLLOW':
        yield call(usersAPI.follow, id);
        break;
      default:
        break;
    }
  } catch (error) {
    throw new Error('Something went wrong. Cannot unfollow ', error);
  }
}

export function* sagaWorkerUsers({ payload }) {
  try {
    const data = yield call(usersAPI.getUsers, payload.currentPage, payload.pageSize);
    yield put(setTotalUsersCount(data.totalCount));
    yield put(setUsers(data.items));
  } catch (error) {}
}

export function* sagaWatcherUsers() {
  yield takeEvery(GET_USERS, sagaWorkerUsers);
  yield takeLatest(FOLLOW, sagaWorkerFollowUnfollow);
  yield takeLatest(UNFOLLOW, sagaWorkerFollowUnfollow);
}

export function* sagaWorkerProfile() {
  try {
    const id = yield select(selectors.profileID);
    const data = yield call(profileAPI.getProfile, id);
    yield put(setUserProfile(data));
    const status = yield call(profileAPI.getProfileStatus, id);
    yield put(setStatus(status));
  } catch (error) {
    yield put({ type: SET_ERROR, payload: error.message });
  }
}

export function* sagaWorkerProfileStatus({ status }) {
  try {
    yield call(profileAPI.updateStatus, status);
  } catch (error) {}
}

export function* sagaWatcherProfile() {
  yield takeEvery(SET_ID, sagaWorkerProfile);
  yield takeEvery(UPDATE_STATUS, sagaWorkerProfileStatus);
}

export function* sagaWorkerLogin({ email, password }) {
  try {
    const res = yield call(authAPI.login, email, password);
    if (res.data.resultCode === 0) {
      yield sagaWorkerAuth();
    } else {
      yield put(setLoginError(res.data.messages));
    }
  } catch (error) {}
}

export function* sagaWatcherLogin() {
  yield takeEvery(LOGIN, sagaWorkerLogin);
}

export function* sagaWorkerAuth() {
  try {
    const res = yield call(authAPI.auth);
    if (res.resultCode === 0) {
      yield put(setUser(res.data));
    }
  } catch (error) {}
}

export function* sagaWatcherAuth() {
  yield takeEvery(AUTH, sagaWorkerAuth);
}

export function* sagaWorkerLogout() {
  try {
    yield call(authAPI.logout);
  } catch (error) {}
}

export function* sagaWatcherLogout() {
  yield takeEvery(LOGOUT, sagaWorkerLogout);
}

export function* sagaWorkerSaveProfile({ photo }) {
  try {
    const res = yield call(profileAPI.savePhoto, photo);
    yield put(savePhoto(res.photos.small));
  } catch (error) {}
}

export function* sagaWatcherSavePhoto() {
  yield takeEvery(SAVE_PHOTO, sagaWorkerSaveProfile);
}

export default function* rootSaga() {
  yield spawn(sagaWatcherUsers);
  yield spawn(sagaWatcherProfile);
  yield spawn(sagaWatcherAuth);
  yield spawn(sagaWatcherLogin);
  yield spawn(sagaWatcherLogout);
  yield spawn(sagaWatcherSavePhoto);
}
