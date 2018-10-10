import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCryptocurrencies } from '../../redux/actions/cryptocurrenciesActions';

import CryptoTableHeader from './CryptoTableHeader';
import CryptoTableRow from './CryptoTableRow';

const mapDispatchToProps = dispatch => {
	return {
        fetchCryptocurrencies:
            ()=>dispatch(fetchCryptocurrencies())
    }
}

let CryptoTable = () => (
    <div>
        <button onClick={()=>this.props.fetchCryptocurrencies()}>
            fetch
        </button>
        <CryptoTableHeader />
        <CryptoTableRow />
    </div>
);

CryptoTable = connect(
    null, mapDispatchToProps
)(CryptoTable);

export default CryptoTable;