import api from '../utils/api';
import { POST_ERROR, GET_POSTS } from './types';

// Get all posts
export const getAllPosts = () => async dispatch => {
    try {
        const res = await api.get('/posts');
        
        dispatch({
            type: GET_POSTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { status: err.response.status }
        })
    }
} 