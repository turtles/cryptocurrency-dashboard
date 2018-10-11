export const FETCH_CRYPTOCURRENCIES = 'FETCH_CRYPTOCURRENCIES';
export const FETCH_CRYPTOCURRENCIES_COMPLETE = 'FETCH_CRYPTOCURRENCIES_COMPLETE';
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

export const fetchCryptocurrencies = () => ({
    type: FETCH_CRYPTOCURRENCIES
});

export const changeCurrency = (newCurrency) => ({
    type: CHANGE_CURRENCY,
    newCurrency
});
