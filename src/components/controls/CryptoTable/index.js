import React, { Component } from 'react';

import CryptoTableHeader from './CryptoTableHeader';
import CryptoTableBody from './CryptoTableRow';
import LoadingSpinner from '../LoadingSpinner';


const CryptoTable = ({loading, currency, data}) => {
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <table>
            <CryptoTableHeader />
            <CryptoTableBody currency={currency} data={data} />
        </table>
    );
}

export default CryptoTable;