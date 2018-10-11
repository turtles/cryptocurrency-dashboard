import React from 'react';

const Statistic = ({name, children}) => (
    <div>
        <h4>{name}</h4>
        <p>{children}</p>
    </div>
)

export default Statistic;