import React from 'react';
import styled from 'styled-components';
import { mobileMaxWidth } from '../reusable/screenSize';

const StyledLoginForm = styled.form`
    width: auto;
    height: auto;
    position: relative;
    justify-self: center;

    @media (max-width: ${mobileMaxWidth}){
        align-self: center;
    }

`

const LoginForm = () => {

    return (
            <StyledLoginForm>
                <h1>Welcome</h1>
            </StyledLoginForm>
    )

}

export default LoginForm;
