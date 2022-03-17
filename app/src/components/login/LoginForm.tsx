import React from 'react';
import styled from 'styled-components';
import { mobileMaxWidth } from '../reusable/screenSize';
import { StyledH1, StyledSubHeading } from '../reusable/Heading';
import StyledInputComponent from '../reusable/StyledInputComponent';

const StyledLoginForm = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
`

const StyledLoginFormWrapper = styled.div`
    max-width: 421px;
    width: 100%;
    display: flex;
    gap: 40px;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin:auto;

`

const StyledLoginFormHeading = styled.div`
    text-align: center; 
    color: rgb(9, 46, 59);
`

const LoginForm = () => {

    return (
            <StyledLoginFormWrapper>
               
                <StyledLoginFormHeading>
                    <StyledH1>Welcome</StyledH1>
                    <StyledSubHeading>
                        Log in to your Faethm account
                    </StyledSubHeading>                   
                </StyledLoginFormHeading>               

                <StyledLoginForm>
                    <StyledInputComponent 
                        label="Email Address" 
                        placeHolder="Type in email address"
                        inputType="email"
                        name="email"
                        />
                </StyledLoginForm>

            </StyledLoginFormWrapper>
    )

}

export default LoginForm;
