import { createStore, compose} from 'redux';

const enhancer = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose

const reducer = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case 'REFRESH_TIME':
            return { time: (new Date()).toJSON() };
        default:
            return state
    }
}
const store = createStore(reducer, enhancer);

export default store;
