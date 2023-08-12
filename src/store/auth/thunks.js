import {checkingCredentials, login, logout} from "./authSlice.js";
import {signInWithGoogle} from "../../firebase/provider.js";
// import {signInWithGoogle} from '../../firebase/provider.js';

export const checkingAuthentication = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startOnGoogleSignIn = () => {
    return async( dispatch )=> {

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        if( !result.ok ) return dispatch(logout( result.errorMessage));

        dispatch( login(result))
    }
}