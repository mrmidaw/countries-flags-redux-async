import { SET_COUNTRY, SET_LOADING, SET_ERROR, CLEAR_DETAILS } from './details-actions';

const initialState = {
    currentCountry: null,
    status: 'idle',  // loading | received | rejected
    error: null,
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                status: 'loading',
                error: null
            }
        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: action.payload
            }
        case CLEAR_DETAILS:
            return {
                initialState
            }
        case SET_COUNTRY:
            return {
                ...state,
                status: 'received',
                currentCountry: action.payload
            }
        default:
            return {
                state
            }
    };
};