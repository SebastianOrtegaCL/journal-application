import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import {AuthLayout} from "../layout/AuthLayout.jsx";

export const Register = () => {
    return (
        <AuthLayout title="register">
            <form>
                <Grid container>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Name"
                            placeholder="Your name"
                            type="text"
                            fullWidth
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            placeholder="example@gmail.com"
                            type="email"
                            fullWidth
                        >
                        </TextField>
                    </Grid>
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            placeholder="********"
                            type="password"
                            fullWidth>
                        </TextField>
                    </Grid>
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1}}>
                        <Grid item xs={ 12 } >
                            <Button variant='contained' fullWidth>
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
