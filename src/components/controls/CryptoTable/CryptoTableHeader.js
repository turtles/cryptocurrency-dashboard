import React from 'react';
import styled from 'styled-components';

/**
 * Presentational component for header items of CryptoTable
 */
const CryptoTableHeader = () => (
    <thead>
        <tr>
            <th>
                Cryptocurrency
            </th>
            <th>
                Price
            </th>
            <th>
                Market Cap
            </th>
            <th>
                24h Change
            </th>
        </tr>
    </thead>
);

export default CryptoTableHeader;