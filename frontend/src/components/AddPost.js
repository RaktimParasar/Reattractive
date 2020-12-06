import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addPost } from '../actions/post';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  timestamp: Date.now(),
  voteScore: 0,
  deleted: false,
  id: uuidv4(),
  title: '',
  author: '',
  category: '',
  body: ''
};

const AddPost = ({ 
  addPost,
  history
}) => {

const [ data, setData ] = useState(initialState);

  const { 
    title,
    author,
    category,
    body
    } = data;

  const onChangeHandle = e => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    })
  };

  const onSubmitHandle = e => {
    e.preventDefault();
    addPost(data);
    history.push('/');
  }

  return (
    <section className="post-section">
      <h1>
        Create New Post
      </h1>
      <small>* = required field</small>
    <form className="form" onSubmit={(e) => onSubmitHandle(e)}>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="*Title" 
          name="title"
          value={title}
          onChange={(e) => onChangeHandle(e)}
          />
        <small className="form-text">A short and precise title with 26 characters only</small>
      </div>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="*Author" 
          name="author" 
          value={author}
          onChange={(e) => onChangeHandle(e)}
          />
        <small className="form-text">Full name of author</small>
      </div>
      <div className="form-group">
        <select name="category" value={category} onChange={(e) => onChangeHandle(e)}>
          <option value="react">React</option>
          <option value="redux">Redux</option>
          <option value="udacity">Udacity</option>
        </select>
        <small className="form-text">Select a category</small>
      </div>
      <div className="form-group">
        < textarea
          placeholder="*Post" 
          name="body"
          value={body}
          onChange={(e) => onChangeHandle(e)}
          />
        <small className="form-text">Write your content here</small>
      </div>
      <input type="submit" value="Submit"/>
      <Link to='/'>Go Back</Link>
    </form>
  </section>
  )
}

AddPost.propTypes = {
  addPost: PropTypes.func.isRequired,
}

export default connect(null, { addPost })(AddPost)
