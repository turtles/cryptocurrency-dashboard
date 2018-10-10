import { takeLatest, put, all } from 'redux-saga/effects';
import axios from 'axios';

import {
    FETCH_CRYPTOCURRENCIES,
    FETCH_CRYPTOCURRENCIES_COMPLETE
} from '../actions/cryptocurrenciesActions';


function* fetchCryptocurrencies() {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

    const result = yield axios.get(url)
        .then(
            // Reduce to data
            response => response.data
        )

    yield put({ type: FETCH_CRYPTOCURRENCIES_COMPLETE, result });
}

function* actionWatcher() {
    yield takeLatest(FETCH_CRYPTOCURRENCIES, fetchCryptocurrencies);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}