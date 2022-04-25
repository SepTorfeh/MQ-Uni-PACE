import styled from 'styled-components';
import { StyledH1, StyledSubHeading } from '../reusable/Heading';
import StyledInputComponent from '../reusable/StyledInputComponent';
import { LoginButton } from '../reusable/Button';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { FormEvent, useState, useEffect } from "react";
import { fetchUserLoginAsync } from "../../redux/login/login-slice";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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
    let navigate = useNavigate();

    const loading = useAppSelector(state => state.login.loading);
    const error = useAppSelector(state => state.login.error);
    const isAuthenticated = useAppSelector(state => !!state.login.token)

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/survey");
        }
    }, [isAuthenticated]);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        dispatch(fetchUserLoginAsync({username, password}));
    };

    return (
            <StyledLoginFormWrapper>
                {loading && <Box sx={{display:'flex'}}><CircularProgress/></Box>}
                {error && <Alert severity="error">{error}</Alert>}
                <StyledLoginFormHeading>
                    <StyledH1>Welcome</StyledH1>
                    <StyledSubHeading>
                        Log in to your Faethm account
                    </StyledSubHeading>                   
                </StyledLoginFormHeading>               

                <StyledLoginForm onSubmit={submitHandler} >

                    <StyledInputComponent 
                        label="Email Address" 
                        placeHolder="Type in email address"
                        inputType="email"
                        name="email"
                        func={setUsername}
                        />

                    <StyledInputComponent 
                        label="Password" 
                        placeHolder="Type in password"
                        inputType="password"
                        name="password"
                        func={setPassword}
                        />
                    
                    <LoginButton txt="Log in" />

                </StyledLoginForm>

            </StyledLoginFormWrapper>
    )

}

export default LoginForm;
