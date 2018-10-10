import React from 'react';
import styled from 'styled-components';

const TableRow = styled.tr`
text-align: left;

`;
const RowItem = styled.th`
`;

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
                            price={row.price_usd}
                            marketCap={row.market_cap_usd}
                            change24h={row.percent_change_24h}
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
        <RowItem>{change24h}</RowItem>
    </TableRow>
);

export default CryptoTableBody;