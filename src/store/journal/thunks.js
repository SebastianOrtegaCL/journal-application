import {doc, collection, setDoc} from 'firebase/firestore/lite';
import {FirebaseDB} from "../../firebase/config.js";
import {addNewEmptyNote, savingNewNote, setActiveNote, setNote} from "./";
import {loadNote} from "../../helpers";
export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch( savingNewNote());
        const {uid} = getState().auth;

        const newNote = {
            title: '',
            content: '',
            date: new Date().getTime(),
        }
        const newDoc = doc(collection(FirebaseDB, `${ uid }/journal/notes`));
        const setDocResp = await setDoc(newDoc, newNote);
        newNote.id = newDoc.id;
        dispatch( addNewEmptyNote(newNote));
        dispatch( setActiveNote( newNote));

    }
};

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        const {uid} = getState().auth;
        if(!uid) throw new Error ('User not logged in');
        const notes = await loadNote(uid);

        dispatch( setNote(notes));
    }
};