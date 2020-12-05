import api from '../utils/api';
import { GET_COMMENTS, COMMENT_ERROR } from './types';

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