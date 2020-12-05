import { combineReducers } from 'redux';
import { categories } from './categories';
import { post } from './post';
import { comments } from './comments';

export default combineReducers({
    categories,
    post,
    comments
})