import React from 'react';

import CryptoTableHeader from './CryptoTableHeader';
import CryptoTableBody from './CryptoTableRow';
import LoadingSpinner from '../LoadingSpinner';
import LastUpdatedLabel from '../LastUpdatedLabel';

/**
 * Displays a table of cryptocurrency data
 */
const CryptoTable = ({loading, lastUpdated, currency, data}) => {
    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <React.Fragment>
            <LastUpdatedLabel time={lastUpdated}/>
            <table>
                <CryptoTableHeader />
                <CryptoTableBody currency={currency} data={data} />
            </table>
        </React.Fragment>
    );
}

export default CryptoTable;