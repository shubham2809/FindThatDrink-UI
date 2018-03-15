import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: null,
    loading: false,
    name : null,
    description: null,
    tags : []
}

const submitFormReducer = (state = initialState , action) => {

    switch (action.type){
        case actionTypes.SUBMIT_FORM:
        const selectedTags = Object.keys(action.values)
			.filter(tgKey => {
				return action.values[tgKey] === true
            })
        return {
            ...state ,
            name: action.values.name,
            description : action.values.description,
            tags : [...selectedTags]
        }
    }


    return state;
}

export default submitFormReducer;
       