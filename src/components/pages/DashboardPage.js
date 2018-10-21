import React from 'react';
import { connect } from 'react-redux';

import CryptoTable from '../controls/CryptoTable';
import Header from '../components/Header';
import LastUpdated from '../components/LastUpdated';
import PageContentWrapper from '../components/PageContentWrapper';

const mapStateToProps = (state) => ({
    loading: state.cryptocurrencies.loading,
    currency: state.cryptocurrencies.currency,
    data: state.cryptocurrencies.data,
    lastUpdated: state.cryptocurrencies.lastUpdated
})

/**
 * Displays an overview of all cryptocurrencies in a list
 */
const DashboardPage = ({loading, currency, data, lastUpdated}) => {
    return (
        <React.Fragment>
            <Header>Cryptocurrency Dashboard</Header>
            <LastUpdated>{`${lastUpdated}`}</LastUpdated>
            <PageContentWrapper>
                <CryptoTable loading={loading} currency={currency} data={data} />
            </PageContentWrapper>
        </React.Fragment>
    );
}

export default connect(mapStateToProps)(DashboardPage);