import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Tr} from '../../components/Table';

import {
    formatCurrency,
    formatPercent
} from '../../../functions/Formatters';

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

const CryptoTableBody = ({currency, data}) => {
    if (!data) return null;
    
    const currencyLowerCase = currency.toLowerCase();
    
    return (
        <tbody>
            {
                data.map(row =>
                    (
                        /** Currency property keys from the API are named with their currency format.
                            
                            The data should be formatted by the reducer to remove the currency name from
                            the key and thus simplify whenever they are accessed.

                            In the interest of time, though, they are accessed directly with selectors here.
                        */
                        <CryptoTableRow
                            key={row.name}
                            name={row.name}
                            price={formatCurrency(row[`price_${currencyLowerCase}`], 2, currency)}
                            marketCap={formatCurrency(row[`market_cap_${currencyLowerCase}`], 0, currency)}
                            change24h={formatPercent(row.percent_change_24h)}
                            />
                    )
                )
            }
        </tbody>
    )
};

const CryptoTableRow = ({name, price, marketCap, change24h}) => (
    <Tr>
        <RowItem>
            <Link to={`/${name}`}>{name}</Link>
        </RowItem>
        <RowItem>{price}</RowItem>
        <RowItem>{marketCap}</RowItem>
        <RowItem>
            <MarketChange>{change24h}</MarketChange>
        </RowItem>
    </Tr>
);

export default CryptoTableBody;