import React from 'react';
import styled from 'styled-components';

/**
 * Displays a name and value pair.
 */
const Statistic = ({name, children, className}) => (
    <div className={className}>
        <h4>{name}</h4>
        <p>{
            children ? children : 'Not available'
        }</p>
    </div>
)

export default styled(Statistic)`
    background-color: #30384d;
    margin: 0.25em;
    padding: 0.05em 0.75em;
    width: 10em;
    border-radius: 4px;
    font-size: 1.25em;
    line-height: 1.5em;

    h4 {
        color: #797e8c;
        line-height: 1em;
        text-transform: uppercase;
        font-style: italic;
    }
`;