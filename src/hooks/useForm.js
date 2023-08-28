import {useEffect, useMemo, useState} from "react";

export const useForm = ( initialForm = {}, formValidations = {} ) => {
    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [formState]);

    useEffect(() => {
        setFormState( initialForm );
    }, [initialForm]);

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys( formValidation )) {
            if( formValidation[formValue] !== null ) return false;
        }
        return true;
    }, [formValidation]);

    const onInputChange = ( {target }) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }
    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {}
        // console.log(Object.keys(formValidations)) // obtengo las keys de formValidations, es decir : 'email,password, displayName'
        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage = 'Este campo es requerido.'] = formValidations[formField];
            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }
        setFormValidation(formCheckedValues);
        // console.log(formCheckedValues);
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}

