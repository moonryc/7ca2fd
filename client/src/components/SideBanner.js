import React from 'react';
import {Box, Grid, Typography} from "@material-ui/core";
import {authStyles} from "../authStyles";

const SideBanner = ({isMobile, children}) => {
    const classes = authStyles({isMobile})

    return (
        <Grid item className={classes.sideBannerRoot} xs={12} sm={5}>
            <Box className={classes.sideBannerBg}/>
            <Box className={classes.sideBannerTextRoot}>
                <img alt={''} className={classes.sideBannerTextChat}
                     src={`${process.env.PUBLIC_URL}/assets/bubble.svg`}/>
                {!isMobile &&
                    <Typography className={classes.sideBannerText}>Converse with anyone with any language</Typography>}
                {isMobile && children}
            </Box>
        </Grid>
    );
};

export default SideBanner;
