import api from '../utils/api';
import { 
    GET_COMMENTS, 
    COMMENT_ERROR, 
    VOTE_COMMENTS, 
    DELETE_COMMENT
} from './types';

// Get all comments of a post
export const getComments = id => async dispatch => {
    try {
        const res = await api.get(`/posts/${id}/comments`);

        dispatch({
            type: GET_COMMENTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: COMMENT_ERROR,
            payload: { err }
        })
    }
};

// Vote comments
export const voteComments = (id, vote) => async dispatch => {
    try {
        const res = await api.post(`/comments/${id}`, { option: vote });

        dispatch({
            type: VOTE_COMMENTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: COMMENT_ERROR,
            payload: { err }
        })
    }
};

// Delete post
export const deleteComment = id => async dispatch => {
    if(window.confirm('Are you sure? This can NOT be undone')) {
        try {
            const res = await api.delete(`/comments/${id}`);
    
            dispatch({
                type: DELETE_COMMENT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: COMMENT_ERROR,
                payload: { err }
            })
        }
    }
};