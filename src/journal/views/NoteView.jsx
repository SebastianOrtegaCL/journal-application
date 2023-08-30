import {Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import {SaveOutlined, UploadOutlined, DeleteOutlineOutlined} from "@mui/icons-material";
import { ImageGallery } from "../components";
import {useForm} from "../../hooks/index.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useRef} from "react";
import {setActiveNote, startDeletingNote, startSavingNote, startUploadingFiles} from "../../store/journal/index.js";
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

    const fileInputRef = useRef();
    
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
    
    const onFileInputChange = ({target}) => {
        if( target.files === 0) return;

        console.log('subiendo archivos');
        dispatch( startUploadingFiles( target.files ));

    }

    const onDeleteNote = () => {
        dispatch(startDeletingNote() );
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
                <input
                    type='file'
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />
                <IconButton
                    color='primary'
                    disabled={ isSaving}
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

                <Button disabled={isSaving} onClick={ onSaveNote } color='primary' sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                        Save
                </Button>
            </Grid>

            <Grid container>
                <TextField name='title' value={title} onChange={onInputChange} type='text' variant='filled' fullWidth placeholder='Title' label='Title' sx={{ border: 'none', mb: 1}}/>
                <TextField name='content' value={content} onChange={onInputChange} type='text' variant='filled' fullWidth multiline placeholder="What's happening" label='' minRows={ 5 } />
            </Grid>

            <Grid container justifyContent='end'>
                <Button disabled={isSaving} onClick={ onDeleteNote } color='primary' sx={{ mt: 2 }}>
                    <DeleteOutlineOutlined  />
                    Delete
                </Button>
            </Grid>

        {/*    Img gallery */}
            <ImageGallery images={note.imageUrls} />
        </Grid>
    )
}
