import React from 'react';
import styled from 'styled-components';

import BackButton from '../BackButton'

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
    </HeaderContainer>
)

export default Header;