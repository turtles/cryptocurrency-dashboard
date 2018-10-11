import React, { Component } from 'react';

import CryptoTableHeader from './CryptoTableHeader';
import CryptoTableBody from './CryptoTableRow';
import LoadingSpinner from '../LoadingSpinner';


const CryptoTable = ({loading, data}) => {
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <table>
            <CryptoTableHeader />
            <CryptoTableBody data={data} />
        </table>
    );
}

export default CryptoTable;