import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import {AuthLayout} from "../layout/AuthLayout.jsx";
import {useForm} from "../../hooks/index.js";

const formData = {
    email: 'sebastian@gmail.com',
    password: '123456',
    displayName: 'sebastian ortega',
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener un @'],
    password: [ (value) => value.length >= 6, 'El correo debe tener una longitud superior a 6 caracteres'],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio']
}

export const Register = () => {

    const { displayName, email, password, onInputChange, formState,
            displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidations);
    console.log(displayNameValid)
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }
    return (
        <AuthLayout title="register">
            <h1>FormValid { isFormValid ? 'Valido' : 'Incorrecto'}</h1>
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
                            error={ !displayNameValid }
                            helperText={ 'el nombre '}
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
