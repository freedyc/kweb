import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './common/reducer';
import saga from './common/saga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
store.runSaga = sagaMiddleware.run;
store.runSaga(saga);

export default store;
