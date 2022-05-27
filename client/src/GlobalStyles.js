import {makeStyles} from "@material-ui/core/styles";

export const loginSignupStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display:'flex',
        // flexDirection:'column',
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
        justifyContent: props=>props.isMobile? 'space-evenly': 'center',
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
        zIndex:1,
        paddingLeft:'20px',
        paddingRight:'20px'
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
        display:'flex',
        alignItems: props => props.isMobile?'center':'initial',
        width:'-webkit-fill-available',
        height:"fit-content",
        flexDirection:props => props.isMobile ? 'column-reverse':'row-reverse',
        marginRight: props => props.isMobile ? '0':'42px',
        marginLeft: props => props.isMobile ? '0':'42px',
    },
    createAccountText:{
        marginTop: props => props.isMobile ? '0':'46px',
        marginRight:props => props.isMobile? '0':'30px',
        height: '19px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '19px',
        /* identical to box height */
        textAlign: 'center',
        color: '#B0B0B0',
    },

    createAccountLink:{
        height:'fit-content',
        background: '#FFFFFF',
        textDecoration:'none',
    },
    createAccountButtonText:{
        height: '19px',
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
        marginTop: props => props.isMobile ? '0':'30px',
        width:'170px',
        height:'54px',
        background: '#FFFFFF',
        boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
        borderRadius: '5px',
    },

    //#endregion

    //#region login form

    formLoginRoot:{
        marginTop:props => props.isMobile?'0':'170px',
        marginLeft:props => props.isMobile?'0':'97px',
        marginRight:props => props.isMobile?'0':'122px',
    },
    formLoginText:{
        height: '40px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '26px',
        lineHeight: '40px',
        /* identical to box height, or 154% */
        color: '#000000',
    },

    formInput:{
        width:'100%',
    },

    //#region username

    formLoginUsernameText:{
        top: 'calc(50% - 19px/2 - 23.5px)',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '19px',
        /* identical to box height */


        color: '#B0B0B0',
    },


    //#endregion

    //region password

    formLoginPassText:{
            fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '19px',
        /* identical to box height */


        color: '#B0B0B0',
    },
    formLoginPassInput:{
        width:'380px'
    },
    formLoginPassForgotText:{
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
