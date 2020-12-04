import {GET_POSTS, GET_POST_BY_CATEGORY, POST_ERROR } from '../actions/types';

const initialState = {
    posts: null,
    loading: true,
    error: {}
}

export const post = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case GET_POSTS:
        case GET_POST_BY_CATEGORY:
            return {
                ...state,
                posts: payload,
                loading: false,
            };
        case POST_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            };
        default:
            return state;
    }
}