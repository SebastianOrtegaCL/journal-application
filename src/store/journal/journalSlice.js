import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: true,
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
        addNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNote: (state, action) => {

        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        }
    }
});

export const {
    addNote,
    setActiveNote,
    setNote,
    setSaving,
    updateNote,
    deleteNoteById
} = journalSlice.actions;