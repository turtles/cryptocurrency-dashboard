import React from 'react';
import { connect } from 'react-redux';

import CryptoTable from '../controls/CryptoTable';
import Header from '../controls/Header';
import cryptocurrencies from '../../redux/reducers/cryptocurrencies';

const mapStateToProps = (state) => ({
    loading: state.cryptocurrencies.loading,
    currency: state.cryptocurrencies.currency,
    data: state.cryptocurrencies.data,
})

class DashboardPage extends React.Component {
    render() {
        const { loading, currency, data } = this.props;
        return (
            <React.Fragment>
                <Header>Cryptocurrency Dashboard</Header>
                <CryptoTable loading={loading} currency={currency} data={data} />
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(DashboardPage);