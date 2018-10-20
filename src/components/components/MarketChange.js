import styled from 'styled-components';
import React from 'react';

const MarketChange = ({value, className}) => {
    const valueParsed = parseFloat(value);
    const symbol = valueParsed === 0 ? '' : (valueParsed < 0 ? '▼' : '▲');
    return (
        <span className={className}>{value}%{symbol}</span>
    );
};

export default styled(MarketChange)`
    color: ${props => {
        const value = parseFloat(props.value);
        if (value === 0) return 'steelblue';
        return (props.value < 0 ? 'red' : 'lightgreen');
    }};
`;
