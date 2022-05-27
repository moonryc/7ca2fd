import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {loginSignupStyles} from "../GlobalStyles";

const SideBanner = ({isMobile, children}) => {
    const classes = loginSignupStyles({isMobile})

    return (
        <Box className={classes.sideBannerRoot}>
            <Box className={classes.sideBannerBg}/>
            <Box className={classes.sideBannerTextRoot}>
                <img alt={''} className={classes.sideBannerTextChat}
                     src={`${process.env.PUBLIC_URL}/assets/bubble.svg`}/>
                {!isMobile && <Typography className={classes.sideBannerText}>Converse with anyone with any language</Typography>}
                {isMobile && children }
            </Box>
        </Box>
    );
};

export default SideBanner;
