import React from 'react';
import { connect } from 'react-redux';

import {
    changeCurrency
} from '../../redux/actions/cryptocurrenciesActions';

const mapStateToProps = (state) => ({
    currency: state.cryptocurrencies.currency
})

const mapDispatchToProps = dispatch => {
	return {
        onChangeCurrency:
            (to)=>dispatch(changeCurrency(to))
    }
}

const CurrencySelect = ({currency, onChangeCurrency}) => (
    <select defaultValue={currency} onChange={(e) => onChangeCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="KRW">KRW</option>
    </select>
);

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelect);
