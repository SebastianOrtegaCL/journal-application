import {checkingCredentials} from "./authSlice.js";
import {signInWithGoogle} from "../../firebase/providers.js";

export const checkingAuthentication = ( email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startOnGoogleSignIn = () => {
    return async( dispatch )=> {

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();

        console.log({result});
    }
}