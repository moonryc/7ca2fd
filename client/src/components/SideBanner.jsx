import React,{useEffect, useState} from 'react';
import {Box, Typography} from "@material-ui/core";
import LoginForm from "./LoginForm";
import {loginSignupStyles} from "../GlobalStyles";
import LoginSignupNav from "./LoginSignupNav";
import {useLocation} from "react-router-dom";

const SideBanner = (props) => {
    const {handleLogin, isMobile} = props
    const classes = loginSignupStyles({isMobile})
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
        <Box className={classes.sideBannerRoot}>
            <Box className={classes.sideBannerBg}/>
            <Box className={classes.sideBannerTextRoot}>
                <img alt={''} className={classes.sideBannerTextChat}
                     src={`${process.env.PUBLIC_URL}/assets/bubble.svg`}/>
                {!isMobile && <Typography className={classes.sideBannerText}>Converse with anyone with any language</Typography>}
                {isMobile && <>
                    <LoginForm handleLogin={handleLogin} isMobile={isMobile}/>
                    {isLogin ? <LoginSignupNav isMobile={isMobile}/>: <LoginSignupNav isMobile={isMobile}/>}
                </>}
            </Box>
        </Box>
    );
};

export default SideBanner;
