import {doc, collection, setDoc, deleteDoc} from 'firebase/firestore/lite';
import {FirebaseDB} from "../../firebase/config.js";
import {
    addNewEmptyNote,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNote,
    setPhotosToActiveNote,
    setSaving,
    updateNote
} from "./";
import {fileUpload, loadNote} from "../../helpers";
export const startNewNote = () => {
    return async( dispatch, getState ) => {
        dispatch( savingNewNote());
        const {uid} = getState().auth;

        const newNote = {
            title: '',
            content: '',
            imageUrls: [],
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

export const startSavingNote = () => {
    return async( dispatch, getState ) => {
        dispatch(setSaving());
        const {uid} = getState().auth;
        if(!uid) throw new Error ('User not logged in');
        const {active} = getState().journal;
        const noteFireStore = {...active};
        delete noteFireStore.id;

        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ active.id }`);
        await setDoc(docRef, noteFireStore, {merge: true});
        dispatch(updateNote( active ));
    }
};

export const startUploadingFiles = (files = []) => {
    return async( dispatch ) => {
        dispatch( setSaving() );
        const fileUploadPromises = [];
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }
        const photosUrl = await Promise.all(fileUploadPromises);
        dispatch(setPhotosToActiveNote(photosUrl));
    }
};

export const startDeletingNote = () => {
    return async( dispatch, getState ) => {
        const {uid} = getState().auth;
        const {active: note} = getState().journal;
        const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${ note.id }`);
        await deleteDoc(docRef);
        dispatch(deleteNoteById(note.id));
    }
};

