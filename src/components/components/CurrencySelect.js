import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
    changeCurrency
} from '../../redux/actions/cryptocurrenciesActions';

const Dropdown = styled.select`
    background: #33344A;
    color: #e7e9ec;
    font-size: 1em;
    padding: 0.35em;
    border: 0;
    border-radius: 4px;
`;

const mapStateToProps = (state) => ({
    currency: state.cryptocurrencies.currency
});

const mapDispatchToProps = dispatch => {
	return {
        onChangeCurrency:
            (to)=>dispatch(changeCurrency(to))
    }
};

/**
 * Dropdown box for changing currency
 */
const CurrencySelect = ({currency, onChangeCurrency}) => (
    <Dropdown defaultValue={currency} onChange={(e) => onChangeCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="KRW">KRW</option>
    </Dropdown>
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelect);
