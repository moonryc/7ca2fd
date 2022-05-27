import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {
    Box,
    Typography,
    Button,
    FormControl,
    TextField, useMediaQuery,
} from '@material-ui/core';
import {loginSignupStyles} from "./GlobalStyles";


const CreateAccount = (props) => {
    const {isMobile} = props
    const classes = loginSignupStyles(props)
    return (
        <Box className={classes.createAccountRoot}>
            <Link className={classes.createAccountLink} to="/register">
                <Button variant={"contained"} className={classes.createAccountButtonBtn}>
                    <Typography className={classes.createAccountButtonText}>Create Account</Typography>
                </Button>
            </Link>
            {!isMobile && <Typography className={classes.createAccountText}>Don't have an account?</Typography>}
        </Box>
    )
}

const LoginForm = (props) => {
    const {handleLogin} = props
    const classes = loginSignupStyles(props)
    return (
        <Box component={'form'} onSubmit={handleLogin} className={classes.formLoginRoot}>
            <Typography className={classes.formLoginText}>Welcome back!</Typography>

            {/*#region username*/}
            <Typography className={classes.formLoginUsernameText}>Username</Typography>
            <FormControl required className={classes.formInput}>
                <TextField className={classes.formInput} hiddenLabel aria-label={'username'}
                           label={'username'} name={'username'} type={'text'}/>
            </FormControl>
            {/*#endregion*/}

            {/*region password*/}
            <Typography className={classes.formLoginPassText}>Password</Typography>
            <FormControl required className={classes.formInput}>
                <TextField className={classes.formInput} hiddenLabel aria-label={'password'}
                           label={'password'} name={'password'} type={'password'}/>
                <Typography className={classes.formLoginPassForgotText}>Forgot?</Typography>
            </FormControl>
            {/*#endregion*/}

            {/*<Box className={classes.formLoginButtonRoot}>*/}
            {/*    <Button className={classes.formLoginButtonBtn} variant={'contained'} type={'submit'}>*/}
            {/*        <Typography className={classes.formLoginButtonText}>Login</Typography>*/}
            {/*    </Button>*/}
            {/*</Box>*/}
        </Box>
    )
}


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

            {/*#region Side Banner*/}
            <Box className={classes.sideBannerRoot}>
                <Box className={classes.sideBannerBg}/>
                <Box className={classes.sideBannerTextRoot}>
                    <img alt={''} className={classes.sideBannerTextChat}
                         src={`${process.env.PUBLIC_URL}/assets/bubble.svg`}/>
                    <Typography className={classes.sideBannerText}>Converse with anyone with any language</Typography>
                    {isMobile && <CreateAccount isMobile={isMobile}/>}
                </Box>
            </Box>
            {/*#endregion*/}

            <Box sx={{display: 'flex', flexDirection: 'column', width: '-webkit-fill-available'}}>
                {/*Create Account*/}
                {!isMobile && <CreateAccount isMobile={isMobile}/>}

                {/*Login Form*/}
                <LoginForm handleLogin={handleLogin} isMobile={isMobile}/>
            </Box>

        </Box>

    );
};

export default Login;
