import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import LoginImage from './LoginImage';
import { mobileMaxWidth } from '../reusable/screenSize';

const StyledLoginWrapper = styled.div`
    display: grid;
    background: white;
    grid-template-columns: 3fr 2fr;
    @media (max-width: ${mobileMaxWidth}){
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100vh;
    }

    

`

const LoginWrapper = () => {

    return (
            <StyledLoginWrapper>
                <LoginImage />
                <LoginForm />
            </StyledLoginWrapper>
    )

}

export default LoginWrapper;
