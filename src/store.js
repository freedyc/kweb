import { createStore, applyMiddleware } from 'redux';

const reducer = (state = {}, action) => {
    const { type } = action;
    switch (type) {
        case 'REFRESH_TIME':
            return { time: new Date() };
        default:
            return state
    }
}
const store = createStore(reducer);

export default store;
