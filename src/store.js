import { createStore, applyMiddleware } from 'redux';

let count = 0;
const reducer = (state = 'No message', action) => {
    const { type } = action;
    switch (type) {
        case 'SHOW_MESSAGE':
            count += 1
            return `${count} a message`; 
        default:
            return state
    }
}
const store = createStore(reducer);

export default store;
