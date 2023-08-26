export const startNewNote = () => {
    return async( dispatch ) => {
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