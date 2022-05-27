import React from 'react';
import {loginSignupStyles} from "../GlobalStyles";
import {Box, Button, FormControl, TextField, Typography} from "@material-ui/core";

const LoginForm = (props) => {
    const {handleLogin} = props
    const classes = loginSignupStyles(props)
    return (
        <Box component={'form'} onSubmit={handleLogin} className={classes.formLoginRoot}>
            <Box>
                <Typography className={classes.formWelcomeText}>Welcome back!</Typography>

                {/*#region username*/}
                <Typography className={classes.formInputText}>Username</Typography>
                <FormControl required className={classes.formInput}>
                    <TextField
                        className={classes.formInput}
                        aria-label={'username'}
                        name={'username'} type={'text'}/>
                </FormControl>
                {/*#endregion*/}

                {/*region password*/}
                <Typography className={[classes.formInputText, classes.formInputTextMarginTop]}>Password</Typography>
                <FormControl required className={classes.formInput}>
                    <TextField className={classes.formInput} aria-label={'password'}
                               name={'password'} type={'password'}/>
                    <Typography className={classes.formLoginPassForgotText}>Forgot?</Typography>
                </FormControl>
                {/*#endregion*/}

                {/*#region Button*/}
                <Box className={classes.formLoginButtonRoot}>
                    <Button className={classes.formLoginButtonBtn} variant={'contained'} type={'submit'}>
                        <Typography className={classes.formLoginButtonText}>Login</Typography>
                    </Button>
                </Box>
                {/*#endregion*/}

            </Box>
        </Box>
    )
}

export default LoginForm;
