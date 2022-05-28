import React from 'react';
import {loginSignupStyles} from "../GlobalStyles";
import {Box, Button, FormControl, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const SignupForm = (props) => {
    const {handleRegister, isMobile} = props
    const classes = loginSignupStyles(props)
    return (
        <Box component={'form'} onSubmit={handleRegister} className={classes.formLoginRoot}>
            <Box>
                <Typography className={classes.formWelcomeText}>Create an account.</Typography>

                {/*#region username*/}
                <Typography className={classes.formInputText}>Username</Typography>
                <FormControl required className={classes.formInput}>
                    <TextField
                        className={classes.formInput}
                        aria-label={'username'}
                        name={'username'} type={'text'}
                    />
                </FormControl>
                {/*#endregion*/}

                {/*region email*/}
                <Typography className={`${classes.formInputText} ${classes.formInputTextMarginTop}`}>E-mail
                    address</Typography>
                <FormControl required className={classes.formInput}>
                    <TextField className={classes.formInput} aria-label={'e-mail address'}
                               name={'email'} type={'email'}/>
                </FormControl>
                {/*#endregion*/}

                {/*region password*/}
                <Typography
                    className={`${classes.formInputText} ${classes.formInputTextMarginTop}`}>Password</Typography>
                <FormControl required className={classes.formInput}>
                    <TextField className={classes.formInput} aria-label={'password'}
                               name={'password'} type={'password'}
                               inputProps={{minLength: 6}}
                    />
                </FormControl>
                {/*#endregion*/}

                {/*region confirm password*/}
                <Typography className={`${classes.formInputText} ${classes.formInputTextMarginTop}`}>Confirm
                    Password</Typography>
                <FormControl required className={classes.formInput}>
                    <TextField className={classes.formInput} aria-label={'confirm password'}
                               name={'confirmPassword'} type={'password'}
                               inputProps={{minLength: 6}}
                    />
                </FormControl>
                {/*#endregion*/}

                {/*#region Button*/}
                <Box className={classes.formLoginButtonRoot}>
                    <Button className={classes.formLoginButtonBtn} variant={'contained'} type={'submit'}>
                        <Typography className={classes.formLoginButtonText}>Create</Typography>
                    </Button>
                    {isMobile &&
                        <Link className={classes.createAccountLink} to={"/login"}>
                            <Button variant={"contained"} className={classes.createAccountButtonBtn}>
                                <Typography className={classes.createAccountButtonText}>Login</Typography>
                            </Button>
                        </Link>
                    }
                </Box>
                {/*#endregion*/}

            </Box>
        </Box>
    );
};

export default SignupForm;
