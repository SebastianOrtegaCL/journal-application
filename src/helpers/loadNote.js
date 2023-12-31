import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config.js";
export const loadNote = async ( uid = '') => {
    if (!uid) throw new Error('loadNote: uid is required');

    const collectionRef = collection(FirebaseDB,`${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    const notes = [];

    docs.forEach((doc) => {
        notes.push({id: doc.id, ...doc.data() });
    })

    return notes;
}