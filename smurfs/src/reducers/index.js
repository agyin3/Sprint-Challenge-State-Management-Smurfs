import { SMURF_LOAD_START, SMURF_LOAD_SUCCESS, SMURF_LOAD_FAILURE, SMURF_POST_SUCCESS, SMURF_POST_START, SMURF_POST_FAILURE } from '../actions'

export const initialState = {
    isLoading: false,
    smurfs: [],
    error: ''
    
}

export const smurfReducer = (state= initialState, action) => {
    switch(action.type) {
        case SMURF_LOAD_START: 
        case SMURF_POST_START:
            return {
                ...state,
                isLoading: true
            }
        case SMURF_LOAD_SUCCESS:
        case SMURF_POST_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
        case SMURF_LOAD_FAILURE:
        case SMURF_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}