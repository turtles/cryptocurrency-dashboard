import React from 'react';

const Statistic = ({name, children}) => (
    <div>
        <h4>{name}</h4>
        <p>{
            children ? children : 'Not available'
        }</p>
    </div>
)

export default Statistic;