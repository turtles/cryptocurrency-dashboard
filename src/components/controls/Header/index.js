import React from 'react';
import styled from 'styled-components';

import BackButton from '../BackButton'
import CurrencySelect from '../CurrencySelect';

const HeaderContainer = styled.div`
    display: flex;
    div {
        padding: 0 2em;
    }
`;

const Header = ({backButton, children}) => (
    <HeaderContainer>
        <div>
            {
                backButton ? 
                    <BackButton />
                    : null
            }
        </div>
        <div>
            <h1>{children}</h1>
        </div>
        <div>
            <CurrencySelect />
        </div>
    </HeaderContainer>
)

export default Header;