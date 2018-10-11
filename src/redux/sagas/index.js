import { takeLatest, put, all, select } from 'redux-saga/effects';
import axios from 'axios';

import {
    FETCH_CRYPTOCURRENCIES,
    FETCH_CRYPTOCURRENCIES_COMPLETE,
    CHANGE_CURRENCY
} from '../actions/cryptocurrenciesActions';

export const getCurrency = (state) => state.cryptocurrencies.currency

function* fetchCryptocurrencies() {
    const currency = yield select(getCurrency);
    
    const url = `https://api.coinmarketcap.com/v1/ticker/?limit=10&convert=${currency}`;

    const result = yield axios.get(url)
        .then(
            // Reduce to data
            response => response.data
        );
    
    const lastUpdated = new Date();

    yield put({ type: FETCH_CRYPTOCURRENCIES_COMPLETE, result, lastUpdated });
}

function* fetchCryptoCurrencyWatcher() {
    yield takeLatest(FETCH_CRYPTOCURRENCIES, fetchCryptocurrencies);
}
function* changeCurrencyWatcher() {
    yield takeLatest(CHANGE_CURRENCY, fetchCryptocurrencies);
}

export default function* rootSaga() {
    yield all([
        fetchCryptoCurrencyWatcher(),
        changeCurrencyWatcher(),
    ]);
}