import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {
    Grid,
    Box,
    Typography,
    Button,
    FormControl,
    TextField,
} from '@material-ui/core';
import {loginSignupStyles} from "./GlobalStyles";


const SideBannerAndBackground = ()=>{
    const classes = loginSignupStyles()
    return(
        <Box className={classes.sideBannerRoot}>
            <Box className={classes.sideBannerBgImg}/>
            <Box className={classes.sideBannerBg}/>
            <Box className={classes.sideBannerTextRoot}>
                <img alt={''} className={classes.sideBannerTextChat} src={`${process.env.PUBLIC_URL}/assets/bubble.svg`}/>
                <Typography className={classes.sideBannerText}>Converse with anyone with any language</Typography>
            </Box>
        </Box>
    )
}

const CreateAccount = ()=>{
    const classes = loginSignupStyles()
    return(
            <Box className={classes.createAccountRoot}>
                <Typography className={classes.createAccountText}>Don't have an account?</Typography>
                <Link className={classes.createAccountButtonRoot} to="/register">
                    <Button className={classes.createAccountButtonBtn} >
                        <Typography className={classes.createAccountButtonText}>Create Account</Typography>
                    </Button>
                </Link>
            </Box>
    )
}

const LoginForm = ({handleLogin}) => {
    const classes = loginSignupStyles()
  return(
      <Box component={'form'} onSubmit={handleLogin} className={classes.formLoginRoot}>
          <Typography className={classes.formLoginText}>Welcome back!</Typography>
          <Box className={classes.formLoginUsernameRoot}>
              <Typography className={classes.formLoginUsernameText}>Username</Typography>
              <FormControl required>
                  <TextField className={classes.formLoginUsernameInput} hiddenLabel aria-label={'username'} label={'username'} name={'username'} type={'text'}/>
              </FormControl>
          </Box>
          <Box className={classes.formLoginPassRoot}>
              <Typography className={classes.formLoginPassText}>Password</Typography>
              <FormControl required>
                  <TextField className={classes.formLoginPassInput} hiddenLabel aria-label={'password'} label={'password'} name={'password'} type={'password'}/>
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
        <Box className={classes.root}>
            {/*Side Banner*/}
            <Grid item xs={1}>
                <SideBannerAndBackground/>
            </Grid>


            {/*The Rest*/}
            <Grid container item xs={11}>

                {/*Create Account*/}
                <CreateAccount/>

                {/*Login Form*/}
                <LoginForm handleLogin={handleLogin} />



            </Grid>
        </Box>

    );
};

export default Login;
