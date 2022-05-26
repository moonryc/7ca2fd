import {makeStyles} from "@material-ui/core/styles";

export const loginSignupStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#FFFFFF'
    },

    //#region sideBanner

    sideBannerRoot: {
        maxWidth:props => props.isMobile ? '100%':'33.33%',
        width: props => props.isMobile ? '100%':'100%',
        height:props => props.isMobile ? '100vh':'100%',
        backgroundSize:'cover',
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg-img.png)`
    },
    sideBannerTextRoot: {
        display:'flex',
        flexDirection:'column',
        justifyContent: props=>props.isMobile? 'center': 'center',
        alignItems:'center',
        width: props => props.isMobile ? '100vw':'auto',
        height:props => props.isMobile ? '100vh':'100vh',
    },
    sideBannerTextChat: {
        width: '67px',
        height: '67px',
        zIndex:1
    },
    sideBannerText:{
        height: '80px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '26px',
        lineHeight: '40px',
        /* or 154% */
        textAlign: 'center',
        color: '#FFFFFF',
        zIndex:1
    },
    sideBannerBg: {
        position: 'absolute',
        maxWidth:props => props.isMobile ? '100%':'33.33%',
        width: props => props.isMobile ? '100%':'100%',
        height:props => props.isMobile ? '100vh':'100%',
        left: '0px',
        top: '0px',
        background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
        mixBlendMode: 'normal',
        opacity: '0.85'
    },

    //#endregion

    //#region createAccount

    createAccountRoot: {
        position: 'absolute',
        width: '351px',
        height: '54px',
        left:'631px',
        top: '30px'
    },
    createAccountText:{
        position: 'absolute',
        height: '19px',
        left: '0%',
        right: '56.98%',
        top: 'calc(50% - 19px/2 - 1.18px)',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '19px',
        /* identical to box height */
        textAlign: 'center',
        color: '#B0B0B0',
    },
    createAccountButtonRoot:{
        position: 'absolute',
        left: '51.57%',
        right: '0%',
        top: '0%',
        bottom: '0%',

        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(88, 133, 196, 0.15)',
    },
    createAccountButtonText:{
        // position: 'absolute',
        height: '19px',
        left: '20%',
        right: '19.41%',
        top: 'calc(50% - 19px/2 - 1.5px)',

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '19px',
        /* identical to box height */

        textAlign: 'center',

        color: '#3A8DFF',
    },
    createAccountButtonBtn:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '0%',

        background: '#FFFFFF',
        boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
        borderRadius: '5px',
    },

    //#endregion

    //#region login form

    formLoginRoot:{
        position: 'absolute',
        width: '380px',
        height: '358px',
        left: '522px',
        top: '170px',
    },
    formLoginText:{
        position: 'absolute',
        height: '40px',
        left: '0%',
        right: '50.26%',
        top: 'calc(50% - 40px/2 - 159px)',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '26px',
        lineHeight: '40px',
        /* identical to box height, or 154% */
        color: '#000000',
    },

    //#region username

    formLoginUsernameRoot:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '20.39%',
        bottom: '61.17%',
    },
    formLoginUsernameText:{
        position: 'absolute',
        height: '19px',
        left: '1.32%',
        right: '73.42%',
        top: 'calc(50% - 19px/2 - 23.5px)',

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '19px',
        /* identical to box height */


        color: '#B0B0B0',
    },
    formLoginUsernameInput:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '96.97%',
        bottom: '0%',
        width:'380px'

        // background: '#3A8DFF',
    },

    //#endregion

    //region password

    formLoginPassRoot:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '49.44%',
        bottom: '32.4%',
    },
    formLoginPassText:{
        position: 'absolute',
        height: '19px',
        left: '1.32%',
        right: '81.84%',
        top: 'calc(50% - 19px/2 - 23px)',

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '19px',
        /* identical to box height */


        color: '#B0B0B0',
    },
    formLoginPassInput:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '98.46%',
        bottom: '0%',
        width:'380px'
    },
    formLoginPassForgotText:{
        position: 'absolute',
        height: '16px',
        left: '85.79%',
        right: '2.63%',
        top: 'calc(50% - 16px/2 + 16.91px)',

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '12px',
        lineHeight: '16px',
        textAlign: 'center',

        color: '#3A8DFF',
    },

    //#endregion

    //#region formButton

    formLoginButtonRoot:{
        position: 'absolute',
        left: '28.95%',
        right: '28.95%',
        top: '84.36%',
        bottom: '0%',

        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.35)',
    },
    formLoginButtonText:{
        position: 'absolute',
        height: '24px',
        left: '36.25%',
        right: '36.25%',
        top: 'calc(50% - 24px/2 + 2px)',

        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '24px',
        /* identical to box height, or 150% */


        color: '#FFFFFF',
    },
    formLoginButtonBtn:{
        position: 'absolute',
        left: '0%',
        right: '0%',
        top: '0%',
        bottom: '0%',

        background: '#3A8DFF',
        borderRadius: '3px',
    }

    //#endregion

    //#endregion

}))
