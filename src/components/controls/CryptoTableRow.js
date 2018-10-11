import React from 'react';
import styled, {css} from 'styled-components';

const TableRow = styled.tr`
    text-align: left;
`;
const RowItem = styled.th`
`;
const PositiveMarketChange = styled.span`
    color: lightgreen
`;
const NegativeMarketChange = styled.span`
    color: red
`;
const NeutralMarketChange = styled.span`
    color: steelblue
`;

const MarketChange = ({children}) => {
    const value = parseFloat(children);
    if (value < 0) {
        return (<NegativeMarketChange>{children} ▼</NegativeMarketChange>);
    }
    else if (value === 0) {
        return (<NeutralMarketChange>{children}</NeutralMarketChange>);
    }
    else {
        return (<PositiveMarketChange>{children} ▲</PositiveMarketChange>);
    }
};

const CryptoTableBody = ({data}) => {
    if (!data) return null;

    // TODO: Formatters belong in their own file or module for reuse
        // Add commas every three places, starting at the end of the non-decimal places
        let forStartOffset = value.includes('.') ? -3 : 0;
        for (let i = value.length - 3 + forStartOffset; i > 0; i -= 3)
        {
            value = value.slice(0, i) + ',' + value.slice(i);
        }
        return value;
    }
    const formatPrice = (price) => (
        formatCurrency(parseFloat(price).toFixed(2))
    );
    const formatMarketCap = (marketCap) => (
        formatCurrency(parseFloat(marketCap).toFixed(0))
    );
    const formatPercent = (percent) => (
        parseFloat(percent).toFixed(2)+'%'
    )

    return (
        <tbody>
            {
                data.map(row =>
                    (
                        <CryptoTableRow
                            key={row.name}
                            name={row.name}
                            price={formatPrice(row.price_usd)}
                            marketCap={formatMarketCap(row.market_cap_usd)}
                            change24h={formatPercent(row.percent_change_24h)}
                            />
                    )
                )
            }
        </tbody>
    )
};

const CryptoTableRow = ({name, price, marketCap, change24h}) => (
    <TableRow>
        <RowItem>{name}</RowItem>
        <RowItem>{price}</RowItem>
        <RowItem>{marketCap}</RowItem>
        <RowItem>
            <MarketChange>{change24h}</MarketChange>
        </RowItem>
    </TableRow>
);

export default CryptoTableBody;