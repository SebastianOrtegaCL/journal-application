import {Grid, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";
import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {setActiveNote} from "../../store/journal";

export const SideBarItem = ({ title, content, id, date, imageUrls = [] }) => {
    const newTitle = useMemo(() => {
        return title.length >= 17 ? title.substring(0, 17) + "..." : title;
    }, [title]);

    const dispatch = useDispatch();

    const handleNote = () => {
        dispatch(setActiveNote({title, content, id, date, imageUrls}));
    };

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={ handleNote }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container >
                    <ListItemText primary={ newTitle } />
                    <ListItemText secondary={ content } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
};

