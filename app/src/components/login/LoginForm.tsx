import React from 'react';
import styled from 'styled-components';

const StyledLoginForm = styled.form`
    width: auto;
    height: auto;
    position: relative;

`

const LoginForm = () => {

    return (
            <div>
            <StyledLoginForm>
                <h1>Welcome</h1>
            </StyledLoginForm>
            </div>
    )

}

export default LoginForm;
