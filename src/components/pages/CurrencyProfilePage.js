import React from 'react';
import BackButton from '../controls/BackButton';

const CurrencyProfilePage = (props) => (
    <div>
        <BackButton />
        Currency Profile for {props.match.params.name}
    </div>
)

export default CurrencyProfilePage;