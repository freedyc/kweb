import * as moment  from 'moment';
const initState = {
    time: moment().format('YYYY-MM-DD HH:mm:ss')
}

export default (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'REFRESH_TIME':
            return { ...state, time: moment().format('YYYY-MM-DD HH:mm:ss') };

        default:
            return state
    }
}
