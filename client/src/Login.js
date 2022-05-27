import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Box, useMediaQuery,} from '@material-ui/core';
import {loginSignupStyles} from "./GlobalStyles";
import LoginForm from "./components/LoginForm";
import LoginSignupNav from "./components/LoginSignupNav";
import SideBanner from "./components/SideBanner";


const Login = ({user, login}) => {

    const history = useHistory();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
    const classes = loginSignupStyles({isMobile})

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements;
        const username = formElements.username.value;
        const password = formElements.password.value;

        await login({username, password});
    };

    useEffect(() => {
        if (user && user.id) history.push('/home');
    }, [user, history]);

    return (
        <Box className={classes.root}>

            {/*#region Side Banner and mobil view*/}
            <SideBanner handleLogin={handleLogin} isMobile={isMobile}/>
            {/*#endregion*/}

            {!isMobile &&
                <Box sx={{display: 'flex', flexDirection: 'column', width: '-webkit-fill-available'}}>
                    {/*Create Account*/}
                    <LoginSignupNav isMobile={isMobile}/>
                    {/*<CreateAccount isMobile={isMobile}/>*/}
                    {/*Login Form*/}
                    <LoginForm handleLogin={handleLogin} isMobile={isMobile}/>
                </Box>
            }
        </Box>

    );
};

export default Login;
