import { createStore, applyMiddleware } from 'redux';

const reducer = (state = 'No message', action) => {
    const { type } = action;
    switch (type) {
        case 'REFRESH_TIME':
            return new Data(); 
        default:
            return state
    }
}
const store = createStore(reducer);

export default store;
