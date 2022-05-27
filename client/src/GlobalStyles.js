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
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:props => props.isMobile?'0':'86px',
        zIndex:1
    },
    formWelcomeText:{
        height: '40px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '26px',
        lineHeight: '40px',
        /* identical to box height, or 154% */
        color: props => props.isMobile? '#FFFFFF':'#000000',
        marginBottom:'33px',
        textAlign:props => props.isMobile? 'center':'left',
    },

    formInput:{
        position:'relative',
        width:'100%',
        minWidth:'380px',
        background:props => props.isMobile? 'white':'none',
    },

    formInputText:{
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: props => props.isMobile ? '700': '400',
        fontSize: '14px',
        lineHeight: '19px',
        /* identical to box height */
        color: props => props.isMobile? '#FFFFFF' : '#B0B0B0',
        marginBottom:'20.18px'
    },

    formInputTextMarginTop:{
        marginTop:'36px'
    },

    formLoginPassForgotText:{
        position:'absolute',
        right:'10px',
        top: 'calc(50% - 14px/2)',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: props => props.isMobile? '700': '600',
        fontSize: '12px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#3A8DFF',
        cursor:'pointer'
    },

    //#region formButton

    formLoginButtonRoot:{
        marginTop:'60px',
        textAlign:'center',
        // background: '#FFFFFF',

    },
    formLoginButtonText:{
        position:'absolute',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '24px',
        /* identical to box height, or 150% */
        color: '#FFFFFF',
    },
    formLoginButtonBtn:{
        position:'relative',
        background: '#3A8DFF',
        borderRadius: '3px',
        width:'160px',
        height:'56px'
    }

    //#endregion

    //#endregion

}))
