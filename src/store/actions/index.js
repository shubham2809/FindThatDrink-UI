import * as actionTypes from '../actions/actionTypes';
import {reset} from 'redux-form';


export const submitFormInit = () => {
    return {
        type: actionTypes.SUBMIT_FORM_INIT
    };
};


export function submitForm(values) {
    return {
        type: actionTypes.SUBMIT_FORM,
        values: values
    }
}

export const submitFormSuccess = () => {
    return {
        type: actionTypes.SUBMIT_FORM_SUCCESS
    };
};