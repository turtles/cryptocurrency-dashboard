import React from 'react';

import CryptoTableHeader from './CryptoTableHeader';
import CryptoTableBody from './CryptoTableRow';
import LoadingSpinner from '../LoadingSpinner';

import Table from '../../components/Table/';

/**
 * Displays a table of cryptocurrency data
 */
const CryptoTable = ({loading, lastUpdated, currency, data}) => {
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <Table>
            <CryptoTableHeader />
            <CryptoTableBody currency={currency} data={data} />
        </Table>
    );
}

export default CryptoTable;