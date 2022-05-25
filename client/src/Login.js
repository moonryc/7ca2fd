import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import {
    Grid,
    Box,
    Typography,
    Button,
    FormControl,
    TextField,
} from '@material-ui/core';
import {loginSignupStyles} from "./GlobalStyles";

const Login = ({ user, login }) => {
  const classes = loginSignupStyles()
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

    return (

        <Grid container sx={classes.root}>
            {/*Side Banner*/}
            <Grid item xs={1} sx={classes.sideBannerRoot}>
                <Box className={classes.sideBannerBgImg}/>
                <Box className={classes.sideBannerBg}/>
                <Box className={classes.sideBannerTextRoot}>
                    <img alt={''} className={classes.sideBannerTextChat} src={`${process.env.PUBLIC_URL}/assets/bubble.svg`}/>
                    <Typography className={classes.sideBannerText}>Converse with anyone with any language</Typography>
                </Box>
            </Grid>
            {/*The Rest*/}
            <Grid container item xs={11}>
                {/*Create Account*/}
                <Box sx={classes.createAccountRoot}>
                    <Typography className={classes.createAccountText}>Don't have an account?</Typography>
                    <Link className={classes.createAccountButtonRoot} href="/register" to="/register">
                        <Button sx={classes.createAccountButtonBtn}>
                            <Typography sx={classes.createAccountButtonText}>Create Account</Typography>
                        </Button>
                    </Link>
                </Box>

                {/*Login Form*/}
                <form onSubmit={handleLogin} className={classes.formLoginRoot}>

                    <Typography sx={classes.formLoginText}>Welcome back!</Typography>
                    <Box className={classes.formLoginUsernameRoot}>
                        <Typography sx={classes.formLoginUsernameText}>Username</Typography>
                        <FormControl required>
                            <TextField sx={classes.formLoginUsernameInput} aria-label={'username'} label={'username'} name={'username'} type={'text'}/>
                        </FormControl>
                    </Box>
                    <Box className={classes.formLoginPassRoot}>
                        <Typography sx={classes.formLoginPassText}>Password</Typography>
                        <FormControl required>
                            <TextField sx={classes.formLoginPassInput} aria-label={'password'} label={'password'} name={'password'} type={'password'}/>
                            <Typography sx={classes.formLoginPassForgotText}>Forgot?</Typography>
                        </FormControl>
                    </Box>

                </form>



            </Grid>
            {/*<form onSubmit={handleLogin}>*/}
            {/*    <Grid>*/}
            {/*        <Grid>*/}
            {/*            <FormControl margin="normal" required>*/}
            {/*                <TextField*/}
            {/*                    aria-label="username"*/}
            {/*                    label="Username"*/}
            {/*                    name="username"*/}
            {/*                    type="text"*/}
            {/*                />*/}
            {/*            </FormControl>*/}
            {/*        </Grid>*/}
            {/*        <FormControl margin="normal" required>*/}
            {/*            <TextField*/}
            {/*                label="password"*/}
            {/*                aria-label="password"*/}
            {/*                type="password"*/}
            {/*                name="password"*/}
            {/*            />*/}
            {/*        </FormControl>*/}
            {/*        <Grid>*/}
            {/*            <Button type="submit" variant="contained" size="large">*/}
            {/*                Login*/}
            {/*            </Button>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</form>*/}
        </Grid>

    );
};

export default Login;
