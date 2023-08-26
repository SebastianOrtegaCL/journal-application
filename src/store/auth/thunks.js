import {checkingCredentials, login, logout} from "./authSlice.js";
import {
    loginWithEmailPassword,
    logoutFirebase,
    registerUserWithEmailPassword,
    signInWithGoogle
} from "../../firebase/provider.js";
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

export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) => {
    return async (dispatch) => {
        dispatch( checkingCredentials() );
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName});
        if( !ok ) return dispatch(logout({ errorMessage }));
        dispatch( login({uid, displayName, email, photoURL }));
    };
    
};

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async(dispatch) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({email, password});
        if( !result.ok ) return dispatch(logout( result ));
        dispatch( login( result ));
    };
};

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch( logout() );
    }
}