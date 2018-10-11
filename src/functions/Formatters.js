export const formatCurrency = (value, decimalPlaces = 2) => {
    // TODO: Add currency symbol
    return formatNumber(value, decimalPlaces);
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
