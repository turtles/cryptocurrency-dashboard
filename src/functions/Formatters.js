export const formatCurrency = (value) => {
    // Add commas every three places, starting at the end of the non-decimal places
    let forStartOffset = value.includes('.') ? -3 : 0;
    for (let i = value.length - 3 + forStartOffset; i > 0; i -= 3)
    {
        value = value.slice(0, i) + ',' + value.slice(i);
    }
    return value;
}

export const formatPrice = (price) => (
    formatCurrency(parseFloat(price).toFixed(2))
);

export const formatMarketCap = (marketCap) => (
    formatCurrency(parseFloat(marketCap).toFixed(0))
);

export const formatPercent = (percent) => (
    parseFloat(percent).toFixed(2)+'%'
)
