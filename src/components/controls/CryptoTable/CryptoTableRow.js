import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
    formatCurrency,
    formatPercent
} from '../../../functions/Formatters';

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

    return (
        <tbody>
            {
                data.map(row =>
                    (
                        <CryptoTableRow
                            key={row.name}
                            name={row.name}
                            price={formatCurrency(row.price_usd, 2)}
                            marketCap={formatCurrency(row.market_cap_usd, 0)}
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
        <RowItem>
            <Link to={`/${name}`}>{name}</Link>
        </RowItem>
        <RowItem>{price}</RowItem>
        <RowItem>{marketCap}</RowItem>
        <RowItem>
            <MarketChange>{change24h}</MarketChange>
        </RowItem>
    </TableRow>
);

export default CryptoTableBody;