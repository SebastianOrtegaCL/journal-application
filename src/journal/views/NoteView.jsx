import {Button, Grid, TextField, Typography} from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImageGallery } from "../components";
import {useForm} from "../../hooks/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {setActiveNote, startSavingNote} from "../../store/journal/index.js";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
    const dispatch = useDispatch(state => state.journal);

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

    const {content, title, date, onInputChange, formState} = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    useEffect( ()=> {
        if(messageSaved.length > 0) {
            Swal.fire('Success!', messageSaved, 'success')
        }
    }, [messageSaved]);

    const onSaveNote = () => {
        dispatch( startSavingNote() );
    };

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
                <Typography fontSize={ 39 } fontWeight='light'> { dateString } </Typography>
            </Grid>
            <Grid item>
                <Button disabled={isSaving} onClick={ onSaveNote } color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                        Save
                </Button>
            </Grid>

            <Grid container>
                <TextField name='title' value={title} onChange={onInputChange} type='text' variant='filled' fullWidth placeholder='Title' label='Title' sx={{ border: 'none', mb: 1}}/>
                <TextField name='content' value={content} onChange={onInputChange} type='text' variant='filled' fullWidth multiline placeholder="What's happening" label='' minRows={ 5 } />
            </Grid>

        {/*    Img gallery */}
            <ImageGallery />
        </Grid>
    )
}
