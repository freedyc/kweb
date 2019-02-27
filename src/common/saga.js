import { takeLatest, put, delay } from 'redux-saga/effects';
import {
    REFRESH_TIME,
} from './constants';

import {
    refreshTime,
} from './actions';

function* refresh() {
    while (true) {
        yield delay(1000);
        console.log('fresh  time');
        yield put(refreshTime());
    }
}

export default function* () {
    yield takeLatest(REFRESH_TIME, refresh);
}
