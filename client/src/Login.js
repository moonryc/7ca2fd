import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {
    Grid,
    Box,
    Typography,
    Button,
    FormControl,
    TextField, useMediaQuery,
} from '@material-ui/core';
import {loginSignupStyles} from "./GlobalStyles";


const SideBannerAndBackground = (props) => {
    const classes = loginSignupStyles(props)
    return (
        <Box className={classes.sideBannerRoot}>
            <Box className={classes.sideBannerBg}/>
            <Box className={classes.sideBannerTextRoot}>
                <img alt={''} className={classes.sideBannerTextChat}
                     src={`${process.env.PUBLIC_URL}/assets/bubble.svg`}/>
                <Typography className={classes.sideBannerText}>Converse with anyone with any language</Typography>
            </Box>
        </Box>
    )
}

const CreateAccount = (props) => {
    const classes = loginSignupStyles(props)
    return (
        <Box className={classes.createAccountRoot}>
            <Link className={classes.createAccountLink} to="/register">
                <Button className={classes.createAccountButtonBtn}>
                    <Typography className={classes.createAccountButtonText}>Create Account</Typography>
                </Button>
            </Link>
            <Typography className={classes.createAccountText}>Don't have an account?</Typography>
        </Box>
    )
}

const LoginForm = (props) => {
    const {handleLogin} = props
    const classes = loginSignupStyles(props)
    return (
        <Box component={'form'} onSubmit={handleLogin} className={classes.formLoginRoot}>
            <Typography className={classes.formLoginText}>Welcome back!</Typography>
            <Box className={classes.formLoginUsernameRoot}>
                <Typography className={classes.formLoginUsernameText}>Username</Typography>
                <FormControl required>
                    <TextField className={classes.formLoginUsernameInput} hiddenLabel aria-label={'username'}
                               label={'username'} name={'username'} type={'text'}/>
                </FormControl>
            </Box>
            <Box className={classes.formLoginPassRoot}>
                <Typography className={classes.formLoginPassText}>Password</Typography>
                <FormControl required>
                    <TextField className={classes.formLoginPassInput} hiddenLabel aria-label={'password'}
                               label={'password'} name={'password'} type={'password'}/>
                    <Typography className={classes.formLoginPassForgotText}>Forgot?</Typography>
                </FormControl>
            </Box>
            <Box className={classes.formLoginButtonRoot}>
                <Button className={classes.formLoginButtonBtn} variant={'contained'} type={'submit'}>
                    <Typography className={classes.formLoginButtonText}>Login</Typography>
                </Button>
            </Box>
        </Box>
    )
}


const Login = ({user, login}) => {
    const classes = loginSignupStyles()
    const history = useHistory();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
    const isTablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.down('md'));


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
            {/*Side Banner*/}

            <SideBannerAndBackground isMobile={isMobile}/>


            {/*Create Account*/}
            <CreateAccount isMobile={isMobile}/>


            {/*Login Form*/}
            {/*<LoginForm handleLogin={handleLogin} />*/}


        </Box>

    );
};

export default Login;
