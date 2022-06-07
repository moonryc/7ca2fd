import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Box, Grid, useMediaQuery} from "@material-ui/core";
import {authStyles} from "./authStyles";
import SideBanner from "./components/SideBanner";
import AuthForm from "./components/AuthForm";
import LoginSignupNav from "./components/LoginSignupNav";

const LoginSignup = ({isLogin, user, login, register}) => {

    const history = useHistory();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
    const classes = authStyles({isMobile})
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
            <Grid container>
            {/*#region Side Banner and mobile view*/}
            <SideBanner isMobile={isMobile}>
                <AuthForm isLogin={isLogin} isMobile={isMobile} handleLogin={handleLogin} handleRegister={handleRegister}
                          formErrorMessage={formErrorMessage}/>
                        <LoginSignupNav isMobile={isMobile} isLogin={isLogin}/>
            </SideBanner>
            {/*#endregion*/}


            <Grid item className={classes.desktopRoot} sm={7}>
                <LoginSignupNav isMobile={isMobile} isLogin={isLogin}/>
                <AuthForm isLogin={isLogin} isMobile={isMobile} handleLogin={handleLogin} handleRegister={handleRegister}
                          formErrorMessage={formErrorMessage}/>
                <Box className={classes.desktopFiller} />
            </Grid>
            </Grid>
        </Box>
    )
};

export default LoginSignup;
