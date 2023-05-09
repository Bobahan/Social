import {
  combineReducers,
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { profileReducer } from './reducers/profile-reducer';
import { usersReducer } from './reducers/users-reducer';
import { dialogReducer } from './reducers/dialog-reducer';
import { authReducer } from './reducers/auth-reducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (initialState) =>
  createStore(reducers, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
const store = configureStore({});
sagaMiddleware.run(rootSaga);

window.store = store;
export default store;
