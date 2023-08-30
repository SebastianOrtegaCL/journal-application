import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     content: '',
        //     date: 1234567,
        //     imageUrls: [], //https://foto1.jpg, https://foto2.jgp, ...
        //
        // }
    },
    reducers: {
        //TODO: creating new note
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNote: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
            //TODO: mensaje de error
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note;
            });

            state.messageSaved = `${action.payload.title}, saved`;
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls,...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter(note => note.id !== action.payload);
        }
    }
});

export const {
    clearNotesLogout,
    setPhotosToActiveNote,
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNote,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;