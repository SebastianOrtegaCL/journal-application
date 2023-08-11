import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import {AuthLayout} from "../layout/AuthLayout.jsx";
import {useForm} from "../../hooks/index.js";

const formData = {
    email: 'sebastian@gmail.com',
    password: '123456',
    displayName: 'Sebastian Ortega',
}

export const Register = () => {

    const { displayName, email, password, onInputChange, formState } = useForm(formData);
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }
    return (
        <AuthLayout title="register">
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Name"
                            placeholder="Your name"
                            type="text"
                            fullWidth
                            value={ displayName }
                            name='displayName'
                            onChange={ onInputChange }
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            placeholder="example@gmail.com"
                            type="email"
                            fullWidth
                            value={ email }
                            name='email'
                            onChange={ onInputChange }
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            placeholder="********"
                            type="password"
                            fullWidth
                            value={ password }
                            name='password'
                            onChange={ onInputChange }
                        >
                        </TextField>
                    </Grid>
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                        <Grid item xs={ 12 } >
                            <Button
                                type='submit'
                                variant='contained'
                                fullWidth
                            >
                                <Typography>
                                    Sign up
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>
                            Have an account?
                        </Typography>
                        <Link component={ RouterLink } color='inherit' to="/auth/login">
                            Log in
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
