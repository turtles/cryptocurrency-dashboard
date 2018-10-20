import styled from 'styled-components';

export default styled.table`
    margin-top: 1rem;
    border: none;
    border-collapse: collapse;
    tbody > tr:nth-of-type(odd) {
        background-color: #393d4e;
    };
    tbody > tr:nth-of-type(even) {
        background-color: #303343;
    };
    tbody > tr:hover {
        background-color: #434757;
    };
    th {
        padding: 0.75em 2em;
    }
    thead {
        text-transform: uppercase;
        font-style: italic;
        color: #797e8c;
        background-color: #232335;
    }
`;
