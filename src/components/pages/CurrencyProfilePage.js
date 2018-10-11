import React from 'react';
import { connect } from 'react-redux';

import {
    formatCurrency,
    formatNumber
} from '../../functions/Formatters';

import BackButton from '../controls/BackButton';
import Statistic from '../controls/CryptoProfile/Statistic';
import Header from '../controls/Header';

const mapStateToProps = (state, ownProps) => {
    if (!state.cryptocurrencies.data) return {};

    const nameFromParams = ownProps.match.params.name;
    const currency = state.cryptocurrencies.currency.toLowerCase();

    const data = state.cryptocurrencies.data.find(o => o.name === nameFromParams);
    if (!data) return {
        found: false,
        name: nameFromParams
    }

    return {
        found: true,
        name: data.name,
        rank: data.rank,
        marketCap: data[`market_cap_${currency}`],
        circulatingSupply: data.available_supply,
        volume24h: data[`24h_volume_${currency}`],
        totalSupply: data.max_supply
    };
}

const CurrencyProfilePage = ({found, name, rank, marketCap, circulatingSupply, volume24h, totalSupply}) => {
    if (!found) {
        return (
            <React.Fragment>
                <Header backButton>{name}</Header>
                Cryptocurrency "{name}" not found
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <Header backButton>{name}</Header>
            <div>
                <Statistic name='Rank'>{rank}</Statistic>
                <Statistic name='Market Cap'>{formatCurrency(marketCap, 0)}</Statistic>
                <Statistic name='Circulating Supply'>{formatNumber(circulatingSupply, 0)}</Statistic>
                <Statistic name='24H Volume'>{formatNumber(volume24h, 0)}</Statistic>
                <Statistic name='Total Supply'>{formatNumber(totalSupply, 0)}</Statistic>
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(CurrencyProfilePage);