const currencyData = [
    {name: 'USD', symbol: '$'},
    {name: 'GBP', symbol: '£'},
    {name: 'EUR', symbol: '€'},
    {name: 'JPY', symbol: '¥'},
    {name: 'KRW', symbol: '₩'},
]

const getSymbolForCurrency = (currency) => {
    return currencyData.find(o => o.name === currency).symbol
}
export const formatCurrency = (value, decimalPlaces = 2, currency = 'USD') => {
    let symbol = getSymbolForCurrency(currency.toUpperCase());
    let formattedNumber = formatNumber(value, decimalPlaces);
    return `${symbol} ${formattedNumber}`;
}

export const formatNumber = (value, decimalPlaces = 0) => {
    if (!value) return null;
    
    value = parseFloat(value).toFixed(decimalPlaces);

    // Add commas every three places, starting at the end of the non-decimal places
    let forStartOffset = value.includes('.') ? -3 : 0;
    for (let i = value.length - 3 + forStartOffset; i > 0; i -= 3)
    {
        value = value.slice(0, i) + ',' + value.slice(i);
    }
    return value;
}

export const formatPercent = (percent) => (
    parseFloat(percent).toFixed(2)+'%'
)
