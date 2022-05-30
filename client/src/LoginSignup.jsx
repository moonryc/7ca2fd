import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {Box, Button, Typography, useMediaQuery} from "@material-ui/core";
import {loginSignupStyles} from "./GlobalStyles";
import SideBanner from "./components/SideBanner";
import LoginForm from "./components/LoginForm";
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
                {isLogin ? <LoginForm handleLogin={handleLogin} isMobile={isMobile}/> : <SignupForm formErrorMessage={formErrorMessage} handleRegister={handleRegister} isMobile={isMobile}/>}
            </SideBanner>
            {/*#endregion*/}

            {!isMobile &&
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '-webkit-fill-available',
                    justifyContent: 'center'
                }}>
                    {/*Create Account/ Login to Account Nav*/}
                    <Box className={classes.createAccountRoot}>
                        <Link className={classes.createAccountLink} to={isLogin? "/register":"/login"}>
                            <Button variant={"contained"} className={classes.createAccountButtonBtn}>
                                <Typography className={classes.createAccountButtonText}>{isLogin ? 'Create Account':'Login'}</Typography>
                            </Button>
                        </Link>
                        {!isMobile && <Typography className={classes.createAccountText}>{isLogin ? "Don't have an account?":"Already have an account?"}</Typography>}
                    </Box>
                    {/*Login/Signup Form*/}
                    {isLogin ? <LoginForm handleLogin={handleLogin} isMobile={isMobile}/> : <SignupForm handleRegister={handleRegister} isMobile={isMobile} formErrorMessage={formErrorMessage}/>}
                </Box>
            }
        </Box>
    )
};

export default LoginSignup;
