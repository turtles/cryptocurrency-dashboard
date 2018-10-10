import {
    FETCH_CRYPTOCURRENCIES,
    FETCH_CRYPTOCURRENCIES_COMPLETE
} from '../actions/cryptocurrenciesActions';

const defaultState = {};

const cryptocurrencies = (state = defaultState, action) => {
    switch (action.type) {

        case FETCH_CRYPTOCURRENCIES:
            return { ...state, loading: true };

        case FETCH_CRYPTOCURRENCIES_COMPLETE:
            return { ...state, loading: false };
        
        // Default reducer
        default:
            return state;
    }
}

export default cryptocurrencies;