import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchCryptocurrencies } from '../../../redux/actions/cryptocurrenciesActions';

import CryptoTableHeader from './CryptoTableHeader';
import CryptoTableBody from './CryptoTableRow';

const mapStateToProps = state => ({
    data: state.data
})

const mapDispatchToProps = dispatch => {
	return {
        onFetchCryptocurrencies:
            ()=>dispatch(fetchCryptocurrencies())
    }
}

let CryptoTable = ({data, onFetchCryptocurrencies}) => {
    return (
        <React.Fragment>
            <button onClick={()=>onFetchCryptocurrencies()}>
                fetch
            </button>
            <br/>
            <table>
                <CryptoTableHeader />
                <CryptoTableBody data={data} />
            </table>
        </React.Fragment>
    );
}

CryptoTable = connect(
    mapStateToProps, mapDispatchToProps
)(CryptoTable);

export default CryptoTable;