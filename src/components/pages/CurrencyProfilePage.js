import React from 'react';
import { connect } from 'react-redux';
import BackButton from '../controls/BackButton';
import Statistic from '../controls/CryptoProfile/Statistic';
import Header from '../controls/Header';

const mapStateToProps = (state, props) => {
    if (!state.data) return {};
    console.log(state.data);
    const data = state.data.find(o => o.name === props.match.params.name);
    if (!data) return {
        found: false
    }

    return {
        found: true,
        rank: data.name,
        marketCap: data.market_cap_usd,
        circulatingSupply: data.available_supply,
        volume24h: data['24h_volume_usd'],
        totalSupply: data.max_supply
    };
}

const CurrencyProfilePage = ({rank, marketCap, circulatingSupply, volume24h, totalSupply}) => (
    <React.Fragment>
        <BackButton/>
        <Header/>
        <div>
            <Statistic name='Rank'>{rank}</Statistic>
            <Statistic name='Market Cap'>{marketCap}</Statistic>
            <Statistic name='Circulating Supply'>{circulatingSupply}</Statistic>
            <Statistic name='24H Volume'>{volume24h}</Statistic>
            <Statistic name='Total Supply'>{totalSupply}</Statistic>
        </div>
    </React.Fragment>
)

export default connect(mapStateToProps)(CurrencyProfilePage);