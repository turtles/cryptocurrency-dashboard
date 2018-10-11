import React from 'react';
import styled from 'styled-components';

import BackButton from '../BackButton'
import CurrencySelect from '../CurrencySelect';

const HeaderContainer = styled.div`
    display: flex;
`;

const HeaderContainerItem = styled.div`
`;


const Header = ({backButton, children}) => (
    <HeaderContainer>
        <HeaderContainerItem>
            {
                backButton ? 
                    <BackButton />
                    : null
            }
        </HeaderContainerItem>
        <HeaderContainerItem>
            <h1>{children}</h1>
        </HeaderContainerItem>
        <HeaderContainerItem>
            <CurrencySelect />
        </HeaderContainerItem>
    </HeaderContainer>
)

export default Header;