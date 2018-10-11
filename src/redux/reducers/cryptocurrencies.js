import {
    FETCH_CRYPTOCURRENCIES,
    FETCH_CRYPTOCURRENCIES_COMPLETE,
    
    CHANGE_CURRENCY
} from '../actions/cryptocurrenciesActions';

const defaultState = {currency: 'USD'};

/**
 * For actions relating to fetching cryptocurrency data
 */
const cryptocurrencies = (state = defaultState, action) => {
    switch (action.type) {

        case FETCH_CRYPTOCURRENCIES:
            return { ...state, loading: true };

        case FETCH_CRYPTOCURRENCIES_COMPLETE:
            const data = action.result;
            const {lastUpdated} = action;
            return {
                ...state,
                data,
                lastUpdated,
                loading: false
            };

        case CHANGE_CURRENCY: 
            return {
                ...state,
                currency: action.newCurrency,
                loading: true
            };
            
        default:
            return state;
    }
}

export default cryptocurrencies;