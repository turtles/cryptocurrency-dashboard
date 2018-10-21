import React from 'react';
import styled from 'styled-components';

const Rank = ({value, className}) => (
    <div className={className}>
        <div>
            {value}
        </div>
        <span>
        Rank
        </span>
    </div>
);

export default styled(Rank)`
    text-align: center;
    display: inline-block;
    font-size: 1.25em;

    div {
        display: inline-block;
        width: 5em;
        height: 5em;
        line-height: 5em;
        text-align: center;
        border: 8px solid;
        border-radius: 100em;
        border-color: #2e344e;
    }
    span {
        display: block;
        text-transform: uppercase;
        font-style: italic;
        padding: 0.5em;
    }
`;