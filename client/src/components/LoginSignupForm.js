import React from 'react';
import {loginSignupStyles} from "../GlobalStyles";
import {Box, Button, FormControl, FormHelperText, TextField, Typography} from "@material-ui/core";


const LoginSignupForm = ({isLogin, handleLogin, handleRegister, isMobile, formErrorMessage}) => {
    const classes = loginSignupStyles({isMobile})
    return (
        <Box component={'form'} onSubmit={isLogin ? handleLogin : handleRegister} className={classes.formLoginRoot}>
            <Box>
                <Typography className={classes.formWelcomeText}>{isLogin ? 'Welcome back!':'Create an account.'}</Typography>

                <Box className={classes.formInputsContainer}>
                    {/*#region username*/}

                    <FormControl required className={classes.formControl}>
                        <Typography className={classes.formInputText}>Username</Typography>
                        <TextField
                            className={classes.formInput}
                            aria-label={'username'}
                            name={'username'} type={'text'}
                        />
                    </FormControl>
                    {/*#endregion*/}

                    {/*region email*/}
                    {!isLogin && (
                        <FormControl required className={classes.formControl}>
                            <Typography className={classes.formInputText}>E-mail
                                address</Typography>
                            <TextField className={classes.formInput} aria-label={'e-mail address'}
                                       name={'email'} type={'email'}/>
                        </FormControl>
                    )}
                    {/*region password*/}
                    <FormControl required className={classes.formControl} error={!!formErrorMessage.confirmPassword}>
                        <Typography
                            className={classes.formInputText}>Password</Typography>
                        <TextField className={classes.formInput} aria-label={'password'}
                                   name={'password'} type={'password'}
                                   inputProps={{minLength: 6}}
                        />
                        {isLogin && <Typography className={classes.formLoginPassForgotText}>Forgot?</Typography>}
                        <FormHelperText>
                            {formErrorMessage.confirmPassword}
                        </FormHelperText>
                    </FormControl>
                    {/*#endregion*/}

                    {/*region confirm password*/}
                    {!isLogin && (
                        <FormControl required className={classes.formControl}
                                     error={!!formErrorMessage.confirmPassword}>
                            <Typography className={classes.formInputText}>Confirm
                                Password</Typography>
                            <TextField className={classes.formInput} aria-label={'confirm password'}
                                       name={'confirmPassword'} type={'password'}
                                       inputProps={{minLength: 6}}
                            />
                            <FormHelperText>
                                {formErrorMessage.confirmPassword}
                            </FormHelperText>
                        </FormControl>
                    )}
                    {/*#endregion*/}
                </Box>
                {/*#region Button*/}
                <Box className={classes.formLoginButtonRoot}>
                    <Button className={classes.formLoginButtonBtn} variant={'contained'} type={'submit'}>
                        <Typography
                            className={classes.formLoginButtonText}>{isLogin ? 'Login' : 'Create'}</Typography>
                    </Button>
                </Box>
                {/*#endregion*/}
            </Box>
        </Box>
    );
};

export default LoginSignupForm;
