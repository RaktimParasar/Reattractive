import { GET_COMMENTS, COMMENT_ERROR, VOTE_COMMENTS, DELETE_COMMENT } from '../actions/types';

const initialState = {
    comments: null,
    loader: true,
    error: {}
}

export const comments = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case GET_COMMENTS:
            return {
                ...state,
                comments: payload,
                loader: false
            };
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== payload.id),
                loader: false
            };
        case VOTE_COMMENTS:
            return {
                ...state,
                comments: state.comments.map(comment => comment.id === payload.id ? {
                    ...comment,
                    voteScore: payload.voteScore
                } : comment),
                loader: false
            }
        case COMMENT_ERROR:
            return {
                ...state,
                loader: false,
                error: payload
            };
        default:
            return state;
    }
};