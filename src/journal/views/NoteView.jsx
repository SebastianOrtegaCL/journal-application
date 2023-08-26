import {Button, Grid, TextField, Typography} from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";

export const NoteView = () => {
    return (
        <Grid
            className='animate__animated animate__fadeIn animate__faster'
            container
            direction='row'
            justifyContent='space-between'
            sx={{ mb: 1 }}
              alignItems='center'
        >
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light'> 7 de Agosto, 2023</Typography>
            </Grid>
            <Grid item>
                <Button color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                        Save
                </Button>
            </Grid>

            <Grid container>
                <TextField type='text' variant='filled' fullWidth placeholder='Title' label='Title' sx={{ border: 'none', mb: 1}}/>
                <TextField type='text' variant='filled' fullWidth multiline placeholder="What's happening" label='' minRows={ 5 } />
            </Grid>

        {/*    Img gallery */}
            <ImageGallery />
        </Grid>
    )
}
