import React from 'react';
import { Link } from 'react-router-dom';

import MarketChange from '../../components/MarketChange';

import {
    formatCurrency,
    formatPercent
} from '../../../functions/Formatters';


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
    <tr>
        <th>
            <Link to={`/${name}`}>{name}</Link>
        </th>
        <th>{price}</th>
        <th>{marketCap}</th>
        <th>
            <MarketChange value={change24h} />
        </th>
    </tr>
);

export default CryptoTableBody;