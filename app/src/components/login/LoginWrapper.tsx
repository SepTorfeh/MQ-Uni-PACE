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

const LoginFormWrapper = styled.div`
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0px 48px;

`

const LoginWrapper = () => {

    return (
            <StyledLoginWrapper>
                <LoginImage />
                <LoginFormWrapper>
                    <LoginForm />
                </LoginFormWrapper>
            </StyledLoginWrapper>
    )

}

export default LoginWrapper;
