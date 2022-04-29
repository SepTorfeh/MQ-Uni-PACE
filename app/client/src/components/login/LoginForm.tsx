import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { FormEvent, useState, useEffect } from 'react';
import { fetchUserLoginAsync } from "../../redux/login/login-slice";
import { useNavigate } from 'react-router-dom';
import { Alert, Box, CircularProgress } from '@mui/material';

const LoginForm = () => {
    let navigate = useNavigate();

    const loading = useAppSelector(state => state.login.loading);
    const error = useAppSelector(state => state.login.error);
    const isAuthenticated = useAppSelector(state => !!state.login.token);

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/landing-page')
        }
    }, [isAuthenticated]);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        dispatch(fetchUserLoginAsync({username, password}));
    };

    return (
            <div className="login-form">
                <div className="login-text">
                    {loading && <Box><CircularProgress/></Box>}
                    {error && <Alert severity="error">{error}</Alert>}
                    <div className="login-heading">Welcome</div>
                    <div className="login-sub">Log in to your Faethm account</div>
                </div>
                <form className="form" onSubmit={submitHandler}>
                    <div className="form-input">
                        <label htmlFor="email">Email address</label>
                        <input id="email" name="email" type="input" placeholder="Type in email address" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="email">Password</label>
                        <input id="password" name="password" type="password" placeholder="Type in password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="button green-button full-width" tabIndex={-1}>Submit</button>
                </form>
            </div>
    )

}

export default LoginForm;
