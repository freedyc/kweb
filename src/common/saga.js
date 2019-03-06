import { takeLatest, put, delay, cancel, fork } from 'redux-saga/effects';
import { CANCEL } from 'redux-saga';
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
function* test() {
    console.log('start');
    const task = yield fork(fetch);
    yield cancel(task);
}
function fetch() {
    console.log('fetch');
    let timerId;
    const promise = new Promise(function(resolve, reject) {
        try {
            timerId = setInterval(function() {
                console.log("done")
                resolve("done");
            },3000)
        } catch (error) {
            reject(error)
        }
    });
    promise[CANCEL] = () => clearInterval(timerId);
    return promise;
}

export default function* () {
    yield* test();
    yield takeLatest(REFRESH_TIME, refresh);
}
