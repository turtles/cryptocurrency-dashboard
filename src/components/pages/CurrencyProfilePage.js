import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
    formatCurrency,
    formatNumber
} from '../../functions/Formatters';

import StatisticList from '../components/Statistics/StatisticList';
import Statistic from '../components/Statistics/Statistic';
import Rank from '../components/Rank';
import LastUpdated from '../components/LastUpdated';
import PageContentWrapper from '../components/PageContentWrapper';

import Header from '../components/Header';
import LoadingSpinner from '../controls/LoadingSpinner';

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
    console.log(lastUpdated);
    return (
        <div>
            <Header backButton>{name}</Header>
            <LastUpdated>{`${lastUpdated}`}</LastUpdated>
            <PageContentWrapper>
                <GridLayout>
                    <LeftColumn>
                        <Rank value={rank}/>
                    </LeftColumn>
                    <RightColumn>
                        <StatisticList>
                            <Statistic name='Market Cap'>{formatCurrency(marketCap, 0, currency)}</Statistic>
                            <Statistic name='Circulating Supply'>{formatNumber(circulatingSupply, 0)}</Statistic>
                            <Statistic name='24H Volume'>{formatNumber(volume24h, 0)}</Statistic>
                            <Statistic name='Total Supply'>{formatNumber(totalSupply, 0)}</Statistic>
                        </StatisticList>
                    </RightColumn>
                </GridLayout>
            </PageContentWrapper>
        </div>
    )
}

const GridLayout = styled.div`
    margin-top: 1em;
`;

const LeftColumn = styled.div`
    width:25%;
    float: left;
    text-align: center;
    margin-top:5em;
`;

const RightColumn = styled.div`
    width:75%;
    float: right;
`;

export default connect(mapStateToProps)(CurrencyProfilePage);