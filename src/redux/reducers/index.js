import { combineReducers } from "redux";

import cryptocurrencies from './cryptocurrencies';
import ids from './ids';

export default combineReducers({
    cryptocurrencies,
    ids,
});