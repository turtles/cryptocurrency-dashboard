import React from 'react';
import { connect } from 'react-redux';
import { fetchCryptocurrencies } from '../../redux/actions/cryptocurrenciesActions';

import CryptoTable from '../controls/CryptoTable';
import Header from '../controls/Header';

const mapStateToProps = ({loading, data}) => ({
    loading,
    data
})

const mapDispatchToProps = dispatch => {
	return {
        onFetchCryptocurrencies:
            ()=>dispatch(fetchCryptocurrencies())
    }
}

class DashboardPage extends React.Component {
    componentWillMount() {
        const { onFetchCryptocurrencies } = this.props;
        onFetchCryptocurrencies();
        setInterval(onFetchCryptocurrencies, 60 * 1000);
    }
    render() {
        const { loading, data } = this.props;

        return (
            <React.Fragment>
                <Header />
                <CryptoTable loading={loading} data={data} />
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);