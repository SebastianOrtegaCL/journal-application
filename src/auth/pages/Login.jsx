import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { Google } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import {AuthLayout} from "../layout/AuthLayout.jsx";
export const Login = () => {
  return (
      <>
        <AuthLayout title="Login">
            <form>
                <Grid
                    container
                >
                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Correo"
                            placeholder="correo@gmail.com"
                            type="email"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={ 12 } sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="********"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant='contained' fullWidth>
                                <Typography >
                                    Login
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 } >
                            <Button variant='contained' fullWidth>
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
