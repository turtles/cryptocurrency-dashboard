import React from 'react';
import { connect } from 'react-redux';

import CryptoTable from '../controls/CryptoTable';
import Header from '../controls/Header';

const mapStateToProps = ({loading, data}) => ({
    loading,
    data
})

class DashboardPage extends React.Component {
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

export default connect(mapStateToProps)(DashboardPage);