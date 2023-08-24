import {Button, Grid, TextField, Typography, Link, Alert} from "@mui/material";
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import {AuthLayout} from "../layout/AuthLayout.jsx";
import {useForm} from "../../hooks/index.js";
import {startLoginWithEmailPassword, startOnGoogleSignIn} from "../../store/auth";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {CheckingAuth} from "../../ui/component/CheckingAuth.jsx";
import { onAuthStateChanged } from 'firebase/auth';
import {FirebaseAuth} from "../../firebase/config.js";
export const Login = () => {
    const {status, errorMessage} = useSelector( state => state.auth);
    console.log(status, errorMessage);

    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async (user) =>{
            console.log(user)
        })
    },[])

    const dispatch = useDispatch();

    const isAuthenticating = useMemo(()=> status === 'checking', [status]);

    const { email, password, onInputChange, formState} = useForm({
        email: 'seba@gmail.com',
        password: '123456'
    });

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch( startLoginWithEmailPassword({email, password}));
    }

    const onGoogleSignIn = () => {
        dispatch(startOnGoogleSignIn());
    }

    const isChecking = status === 'checking';

  return (
      <>
          {
              isChecking ? (
                  <CheckingAuth />
              ) : <AuthLayout title="Login">
                  <form onSubmit={ onSubmit }>
                      <Grid container >
                          <Grid item xs={ 12 } sx={{ mt: 2 }}>
                              <TextField
                                  label="Correo"
                                  placeholder="correo@gmail.com"
                                  type="email"
                                  fullWidth
                                  name='email'
                                  value={ email }
                                  onChange={ onInputChange }
                              />
                          </Grid>

                          <Grid item xs={ 12 } sx={{ mt: 2 }}>
                              <TextField
                                  label="Password"
                                  type="password"
                                  placeholder="********"
                                  fullWidth
                                  name='password'
                                  value={ password }
                                  onChange={ onInputChange }
                              />
                          </Grid>
                          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                              <Grid item
                                    xs={ 12 }
                                    display={ !!errorMessage ? '' : 'none'}
                              >
                                  <Alert severity='error'>
                                      { errorMessage }
                                  </Alert>

                              </Grid>
                              <Grid item xs={ 12 } sm={ 6 }>
                                  <Button
                                      disabled={ isAuthenticating }
                                      type='submit'
                                      variant='contained'
                                      fullWidth>
                                      <Typography >
                                          Login
                                      </Typography>
                                  </Button>
                              </Grid>
                              <Grid item xs={ 12 } sm={ 6 } >
                                  <Button
                                      disabled={ isAuthenticating }
                                      variant='contained'
                                      fullWidth
                                      onClick={ onGoogleSignIn }
                                  >
                                      <Google />
                                      <Typography sx={{ ml: 1}}>
                                          Google
                                      </Typography>
                                  </Button>
                              </Grid>
                          </Grid>
                          <Grid container direction='row' justifyContent='end'>
                              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                                  Sign up
                              </Link>
                          </Grid>
                      </Grid>
                  </form>
              </AuthLayout>
          }


      </>
  )
}
