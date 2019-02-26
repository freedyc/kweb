import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './common/reducer';
import saga from './common/saga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(saga);

export default store;
