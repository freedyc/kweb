import { takeLatest, put } from 'redux-saga/effects';
import {
    REFRESH_TIME
} from './constants';

import {
    refreshTime,
} from './actions';

function* refresh() {
    yield put(refreshTime());
}

export default function* () {
    takeLatest(REFRESH_TIME, refresh);
}
