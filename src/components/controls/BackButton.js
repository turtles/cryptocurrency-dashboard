import React from 'react';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';

const BackButton = () => (
    <Link to='/'>
        <Ionicon icon='md-arrow-back' color='#e7e9ec' />
    </Link>
)

export default BackButton;