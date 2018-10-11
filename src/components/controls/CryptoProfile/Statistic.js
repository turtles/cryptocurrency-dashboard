import React from 'react';

/**
 * Displays a name and value pair.
 */
const Statistic = ({name, children}) => (
    <div>
        <h4>{name}</h4>
        <p>{
            children ? children : 'Not available'
        }</p>
    </div>
)

export default Statistic;