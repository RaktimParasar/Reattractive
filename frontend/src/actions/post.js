import api from '../utils/api';
import { 
    POST_ERROR, 
    GET_POSTS, 
    GET_POST_BY_CATEGORY,
} from './types';

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
            payload: { err }
        })
    }
};

// Get post by category
export const getPostByCategory = (category) => async dispatch => {
    try{
        const res = await api.get(`/${category}/posts`);

        dispatch({
            type: GET_POST_BY_CATEGORY,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { err }
        })
    }
};
