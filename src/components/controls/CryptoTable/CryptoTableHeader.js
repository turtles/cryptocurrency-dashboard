import React from 'react';
import styled from 'styled-components';

const TableHeader = styled.tr`
    text-transform: uppercase;
    font-weight: bold;
`;
const HeaderItem = styled.th`
`;

/**
 * Presentational component for header items of CryptoTable
 */
const CryptoTableHeader = () => (
    <thead>
        <TableHeader>
            <HeaderItem>
                Cryptocurrency
            </HeaderItem>
            <HeaderItem>
                Price
            </HeaderItem>
            <HeaderItem>
                Market Cap
            </HeaderItem>
            <HeaderItem>
                24h Change
            </HeaderItem>
        </TableHeader>
    </thead>
);

export default CryptoTableHeader;