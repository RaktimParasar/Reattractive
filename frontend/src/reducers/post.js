import {GET_POSTS, GET_POST_BY_CATEGORY, GET_SINGLE_POST, POST_ERROR, VOTE_POST } from '../actions/types';

const initialState = {
    posts: null,
    post: null,
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
        case GET_SINGLE_POST:
            return {
                ...state,
                post: payload,
                loading: false
            };
        case VOTE_POST:
            return {
                ...state,
                post: payload,
                loading: false
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