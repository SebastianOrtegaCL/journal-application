import {JournalLayout} from "../layout/JournalLayout.jsx";
import {NoteView, NothingSelectedView} from "../views/index.js";
import {IconButton} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";
import {startNewNote} from "../../store/journal/index.js";
import {useDispatch, useSelector} from "react-redux";

export const JournalPage = () => {
    const dispatch = useDispatch();
    const { isSaving, active } = useSelector( state => state.journal);
    console.log(active);
    const onClickNewNote = () => {
        dispatch(startNewNote());
    }
    return (
        <>
            <JournalLayout className='animate__animated animate__fadeIn animate__faster'>
                {
                    (!!active) ? <NoteView /> : <NothingSelectedView />
                }
                <IconButton
                    disabled={ isSaving }
                    onClick={onClickNewNote}
                    size='large'
                    sx={{
                        color: 'white',
                        backgroundColor: 'error.main',
                        ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                        position: 'fixed',
                        right: 50,
                        bottom: 50,
                    }}
                >
                    <AddOutlined sx={{ fontSize: 30}}/>
                </IconButton>
            </JournalLayout>
        </>
    )
}