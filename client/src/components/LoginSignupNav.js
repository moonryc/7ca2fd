import React from 'react';
import {loginSignupStyles} from "../GlobalStyles";
import {Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const LoginSignupNav = ({isMobile, isLogin}) => {
    const classes = loginSignupStyles({isMobile})

    return (
        <Box className={classes.createAccountRoot}>
            <Link className={classes.createAccountLink} to={isLogin? "/register":"/login"}>
                <Button variant={"contained"} className={classes.createAccountButtonBtn}>
                    <Typography
                        className={classes.createAccountButtonText}>{isLogin ? 'Create Account' : 'Login'}</Typography>
                </Button>
            </Link>
            <Typography className={classes.createAccountText}>{isLogin ? "Don't have an account?":"Already have an account?"}</Typography>
        </Box>
    )
};

export default LoginSignupNav;
