import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import {AuthLayout} from "../layout/AuthLayout.jsx";
import {useForm} from "../../hooks/index.js";
import {checkingAuthentication, startOnGoogleSignIn} from "../../store/auth";
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
export const Login = () => {
    const {status} = useSelector( state => state.auth);

    const dispatch = useDispatch();

    const isAuthenticating = useMemo(()=> status === 'checking', [status]);

    const { email, password, onInputChange, formState} = useForm({
        email: 'sebastian@gmail.com',
        password: '123456'
    });
    
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(checkingAuthentication());
    }

    const onGoogleSignIn = () => {
        dispatch(startOnGoogleSignIn());
    }

  return (
      <>
        <AuthLayout title="Login">
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

      </>
  )
}
