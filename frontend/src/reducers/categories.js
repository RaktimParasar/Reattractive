import { GET_CATEGORIES, CATEGORIES_ERROR } from '../actions/types';

const initialState = {
    categories: null,
    loading: true,
    error: {},
};

export const categories = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload.categories,
                loading: false
            };
        case CATEGORIES_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}