import {JournalLayout} from "./journal/layout/JournalLayout.jsx";
import {NothingSelectedView} from "./journal/views/NothingSelectedView.jsx";
import { NoteView } from "../src/journal/views";
import {IconButton} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";
export const Root = () => {
    return(
        <>
            <JournalLayout >
                {/*<NothingSelectedView />*/}
                <NoteView />

                <IconButton
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