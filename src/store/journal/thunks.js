export const startNewNote = () => {
    return async( dispatch, getState ) => {
        const {uid} = getState().auth;
        console.log(uid);
        console.log('start new note');
        //uid
        // const { uid } = useSelector( state => state.auth);

        const newNote = {
            title: '',
            content: '',
            date: new Date().getTime(),
        }

        //dispatch
        //dispatch( newJournal )
        //dispatch( activarJournal )

    }
}