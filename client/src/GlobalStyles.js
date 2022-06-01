import {makeStyles} from "@material-ui/core/styles";

export const loginSignupStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        width: '100vw',
        height: '100vh',
        background: '#FFFFFF'
    },

    desktopRoot: {
        display: props => props.isMobile ? 'none' : 'flex',
        flexDirection: 'column',
        width: '-webkit-fill-available',
        justifyContent: 'space-between',
        alignContent: 'space-evenly'
    },


    sideBannerRoot: {
        backgroundSize: 'cover',
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bg-img.png)`,
    },
    sideBannerTextRoot: {
        zIndex: 2,
        gap: props => props.isMobile ? '25px' : 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: props => props.isMobile ? '100vw' : 'auto',
        height: props => props.isMobile ? '100vh' : '100vh',
    },
    sideBannerTextChat: {
        width: '67px',
        height: '67px',
        zIndex: 2,
        marginBottom: '39.5px'
    },
    sideBannerText: {
        zIndex: 2,
        height: '80px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '26px',
        lineHeight: '40px',
        textAlign: 'center',
        color: '#FFFFFF',
        // zIndex:1,
        paddingLeft: '20px',
        paddingRight: '20px',
        maxWidth: '269px'
    },
    sideBannerBg: {
        position: 'absolute',
        display: "flex",
        width: props => props.isMobile ? '100vw' : 'calc((5/12)*100vw)',
        height: '100vh',
        left: '0px',
        top: '0px',
        background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
        mixBlendMode: 'normal',
        opacity: '0.85'
    },


    desktopFiller: {
        height: '84px'
    },

    createAccountRoot: {
        //had to increase z index for cypress clicks because it was throwing an error regarding form covering the button
        zIndex: 2,
        gap: props => props.isMobile ? '20px' : 0,
        marginRight: props => props.isMobile ? 0 : '42px',
        marginTop: props => props.isMobile ? 0 : '30px',
        display: 'flex',
        alignItems: props => props.isMobile ? 'center' : 'initial',
        width: '-webkit-fill-available',
        height: "-webkit-fit-content",
        flexDirection: props => props.isMobile ? 'column-reverse' : 'row-reverse',
    },
    createAccountText: {
        marginTop: props => props.isMobile ? '0' : '16.32px',
        marginRight: props => props.isMobile ? '0' : '30px',
        height: '19px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '19px',
        textAlign: 'center',
        color: props => props.isMobile ? '#FFFFFF' : '#B0B0B0',
    },

    createAccountLink: {
        height: 'fit-content',
        background: props => props.isMobile ? 'none' : '#FFFFFF',
        textDecoration: 'none',
    },
    createAccountButtonText: {
        height: '19px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '19px',
        textAlign: 'center',
        color: '#3A8DFF',

    },
    createAccountButtonBtn: {
        width: props => props.isMobile ? '160px' : '170px',
        height: '54px',
        background: '#FFFFFF',
        boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
        borderRadius: props => props.isMobile ? '3px' : '5px',

    },


    formLoginRoot: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: props => props.isMobile ? 0 : '97px',
        maxWidth: props => props.isMobile ? '95vw' : 'fit-content',
        zIndex: 1
    },
    formWelcomeText: {
        height: '40px',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '26px',
        lineHeight: '40px',
        color: props => props.isMobile ? '#FFFFFF' : '#000000',
        marginBottom: '33px',
        textAlign: props => props.isMobile ? 'center' : 'left',
    },
    formInputsContainer: {
        gap: '38px',
        display: 'flex',
        flexDirection: 'column'
    },
    formControl: {
        borderRadius: props => props.isMobile ? '5px' : '0',
    },
    formInput: {
        borderRadius: props => props.isMobile ? '5px' : '0',
        position: 'relative',
        maxWidth: '-webkit-max-content',
        width: '100%',
        minWidth: props => props.isMobile ? '80vw' : '380px',
        background: props => props.isMobile ? 'white' : 'none',
        padding: props => props.isMobile ? '3px' : '0px',
    },
    formInputText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: props => props.isMobile ? '700' : '400',
        fontSize: '14px',
        lineHeight: '19px',
        color: props => props.isMobile ? '#FFFFFF' : '#B0B0B0',
        marginBottom: '10px'
    },
    formLoginPassForgotText: {
        position: 'absolute',
        right: '10px',
        top: 'calc(65% - 14px/2)',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: props => props.isMobile ? '700' : '600',
        fontSize: '12px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#3A8DFF',
        cursor: 'pointer'
    },


    formLoginButtonRoot: {
        display: props => props.isMobile ? 'flex' : 'block',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '57px',
        textAlign: 'center',
        gap: props => props.isMobile ? '25px' : '0'
    },
    formLoginButtonText: {
        position: 'absolute',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '16px',
        lineHeight: '24px',
        color: '#FFFFFF',
    },
    formLoginButtonBtn: {
        position: 'relative',
        background: '#3A8DFF',
        borderRadius: '3px',
        width: '160px',
        height: '56px'
    }


}))
