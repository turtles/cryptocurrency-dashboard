import React from 'react';
import styled from 'styled-components';

import BackButton from '../BackButton'
import CurrencySelect from '../CurrencySelect';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    text-align: center;
    width: 100%;
    div {
        padding: 2em;
        h1 {
            margin: 0;
        }
    }
`;

const Header = ({backButton, children}) => (
    <HeaderContainer>
        <div>
            {
                backButton ? <BackButton /> : null
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