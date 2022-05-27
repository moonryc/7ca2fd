import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Box, FormHelperText, useMediaQuery,} from '@material-ui/core';
import {loginSignupStyles} from "./GlobalStyles";
import SideBanner from "./components/SideBanner";
import LoginSignupNav from "./components/LoginSignupNav";
import SignupForm from "./components/SignupForm";

const Signup = ({ user, register }) => {
  const history = useHistory();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const classes = loginSignupStyles({isMobile})

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
      <Box className={classes.root}>

        {/*#region Side Banner and mobile view*/}
        <SideBanner isMobile={isMobile}>
          <SignupForm handleRegister={handleRegister} isMobile={isMobile}/>
        </SideBanner>
        {/*#endregion*/}

        {!isMobile &&
            <Box sx={{display: 'flex', flexDirection: 'column', width: '-webkit-fill-available'}}>
              {/*Login to existing Account*/}
              <LoginSignupNav isMobile={isMobile}/>
              {/*Signup Form*/}
              <SignupForm handleRegister={handleRegister} isMobile={isMobile}/>
            </Box>
        }
        <FormHelperText>
          {formErrorMessage.confirmPassword}
        </FormHelperText>

      </Box>
    // <Grid container justifyContent="center">
    //   <Box>
    //     <Grid container item>
    //       <Typography>Need to log in?</Typography>
    //       <Link href="/login" to="/login">
    //         <Button>Login</Button>
    //       </Link>
    //     </Grid>
    //     <form onSubmit={handleRegister}>
    //       <Grid>
    //         <Grid>
    //           <FormControl>
    //             <TextField
    //               aria-label="username"
    //               label="Username"
    //               name="username"
    //               type="text"
    //               required
    //             />
    //           </FormControl>
    //         </Grid>
    //         <Grid>
    //           <FormControl>
    //             <TextField
    //               label="E-mail address"
    //               aria-label="e-mail address"
    //               type="email"
    //               name="email"
    //               required
    //             />
    //           </FormControl>
    //         </Grid>
    //         <Grid>
    //           <FormControl error={!!formErrorMessage.confirmPassword}>
    //             <TextField
    //               aria-label="password"
    //               label="Password"
    //               type="password"
    //               inputProps={{ minLength: 6 }}
    //               name="password"
    //               required
    //             />
    //             <FormHelperText>
    //               {formErrorMessage.confirmPassword}
    //             </FormHelperText>
    //           </FormControl>
    //         </Grid>
    //         <Grid>
    //           <FormControl error={!!formErrorMessage.confirmPassword}>
    //             <TextField
    //               label="Confirm Password"
    //               aria-label="confirm password"
    //               type="password"
    //               inputProps={{ minLength: 6 }}
    //               name="confirmPassword"
    //               required
    //             />
    //             <FormHelperText>
    //               {formErrorMessage.confirmPassword}
    //             </FormHelperText>
    //           </FormControl>
    //         </Grid>
    //         <Button type="submit" variant="contained" size="large">
    //           Create
    //         </Button>
    //       </Grid>
    //     </form>
    //   </Box>
    // </Grid>
  );
};

export default Signup;
