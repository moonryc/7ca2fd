import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Box, FormHelperText, useMediaQuery} from "@material-ui/core";
import {loginSignupStyles} from "./GlobalStyles";
import SideBanner from "./components/SideBanner";
import LoginForm from "./components/LoginForm";
import LoginSignupNav from "./components/LoginSignupNav";
import SignupForm from "./components/SignupForm";

const LoginSignup = ({isLogin, user, login, register}) => {

    const history = useHistory();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
    const classes = loginSignupStyles({isMobile})
    const [formErrorMessage, setFormErrorMessage] = useState({});

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements;
        const username = formElements.username.value;
        const password = formElements.password.value;

        await login?.({username, password});
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements;
        const username = formElements.username.value;
        const email = formElements.email.value;
        const password = formElements.password.value;
        const confirmPassword = formElements.confirmPassword.value;

        if (password !== confirmPassword) {
            setFormErrorMessage({confirmPassword: 'Passwords must match'});
            return;
        }
        await register?.({username, email, password});
    };

    useEffect(() => {
        if (user && user.id) history.push('/home');
    }, [user, history]);


    return (
        <Box className={classes.root}>

            {/*#region Side Banner and mobile view*/}
            <SideBanner isMobile={isMobile}>
                {isLogin ? <LoginForm handleLogin={handleLogin} isMobile={isMobile}/> : <SignupForm handleRegister={handleRegister} isMobile={isMobile}/>}
            </SideBanner>
            {/*#endregion*/}

            {!isMobile &&
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '-webkit-fill-available',
                    justifyContent: 'center'
                }}>
                    {/*Create Account*/}
                    <LoginSignupNav isMobile={isMobile}/>
                    {/*Login/Signup Form*/}
                    {isLogin ? <LoginForm handleLogin={handleLogin} isMobile={isMobile}/> : <SignupForm handleRegister={handleRegister} isMobile={isMobile}/>}
                </Box>
            }
        </Box>
    )
};

export default LoginSignup;
