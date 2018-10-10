import React, { Component } from 'react';

const CurrencyProfilePage = (props) => (
    <div>
        Currency Profile for {props.match.params.name}
    </div>
)

export default CurrencyProfilePage;