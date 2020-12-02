import { combineReducers } from 'redux';
import { categories } from './categories';
import { post } from './post';


export default combineReducers({
    categories,
    post,
})