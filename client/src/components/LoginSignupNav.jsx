import React,{useEffect,useState} from 'react';
import {loginSignupStyles} from "../GlobalStyles";
import {Box, Button, Typography} from "@material-ui/core";
import {Link, useLocation} from "react-router-dom";

const LoginSignupNav = (props) => {
    const {isMobile} = props
    const classes = loginSignupStyles(props)
    const location = useLocation()

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if(location.pathname === '/login'){
            setIsLogin(true)
        }else if(location.pathname === '/register'){
            setIsLogin(false)
        }
    }, [location]);


    return (
        <Box className={classes.createAccountRoot}>
            <Link className={classes.createAccountLink} to={isLogin? "/register":"/login"}>
                <Button variant={"contained"} className={classes.createAccountButtonBtn}>
                    <Typography className={classes.createAccountButtonText}>{isLogin ? 'Create Account':'Login'}</Typography>
                </Button>
            </Link>
            {!isMobile && <Typography className={classes.createAccountText}>{isLogin ? "Don't have an account?":"Already have an account?"}</Typography>}
        </Box>
    )
};

export default LoginSignupNav;
