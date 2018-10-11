import React from 'react';
import { connect } from 'react-redux';

import {
    formatCurrency,
    formatNumber
} from '../../functions/Formatters';

import Statistic from '../controls/CryptoProfile/Statistic';
import Header from '../controls/Header';
import LoadingSpinner from '../controls/LoadingSpinner';
import LastUpdatedLabel from '../controls/LastUpdatedLabel';

const mapStateToProps = (state, ownProps) => {
    const nameFromParams = ownProps.match.params.name;

    if (state.cryptocurrencies.loading) return {
        loading: true,
        name: nameFromParams
    };

    const currency = state.cryptocurrencies.currency.toLowerCase();

    const data = state.cryptocurrencies.data.find(o => o.name === nameFromParams);
    if (!data) return {
        loading: false,
        found: false,
        name: nameFromParams
    }

    return {
        loading: false,
        found: true,
        name: data.name,
        rank: data.rank,
        marketCap: data[`market_cap_${currency}`],
        circulatingSupply: data.available_supply,
        volume24h: data[`24h_volume_${currency}`],
        totalSupply: data.total_supply,
        lastUpdated: state.cryptocurrencies.lastUpdated
    };
}

/**
 * Displays additional information about a cryptocurrency
 */
const CurrencyProfilePage = (props) => {
    const {loading, found, name} = props;
    if (loading) {
        return (
            <React.Fragment>
                <Header backButton>{name}</Header>
                <LoadingSpinner />
            </React.Fragment>
        )
    }
    if (!found) {
        return (
            <React.Fragment>
                <Header backButton>{name}</Header>
                Cryptocurrency "{name}" not found
            </React.Fragment>
        )
    }
    const {currency, rank, marketCap, circulatingSupply, volume24h, totalSupply, lastUpdated} = props;
    return (
        <React.Fragment>
            <Header backButton>{name}</Header>
            <LastUpdatedLabel time={lastUpdated} />
            <div>
                <Statistic name='Rank'>{rank}</Statistic>
                <Statistic name='Market Cap'>{formatCurrency(marketCap, 0, currency)}</Statistic>
                <Statistic name='Circulating Supply'>{formatNumber(circulatingSupply, 0)}</Statistic>
                <Statistic name='24H Volume'>{formatNumber(volume24h, 0)}</Statistic>
                <Statistic name='Total Supply'>{formatNumber(totalSupply, 0)}</Statistic>
            </div>
        </React.Fragment>
    )
}

export default connect(mapStateToProps)(CurrencyProfilePage);