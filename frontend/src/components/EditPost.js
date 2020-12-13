import React, { useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { editPost, getSinglePost } from '../actions/post';
import { connect } from 'react-redux';

const initialState = {
    title: '',
    body: ''
};

const EditPost = ({
    match, 
    editPost, 
    history,
    getSinglePost,
    post: { post }
}) => {

    const [ data, setData ] = useState(initialState);
    
    useEffect(() => {
        getSinglePost(match.params.id);
        setData({
            title: post.title,
            body: post.body
        });
    }, [getSinglePost, post.title, post.body, match.params.id]);
    
    const { title, body } = data;
    
    const onChangeHandle = e => {
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value
        })
    };
    
    const onSubmitHandle = e => {
        e.preventDefault();
        editPost(data, post.id);
        history.push(`/posts/${post.id}`)
    }
    return (
        <section className="form-main">
        <h1>
            Edit Post
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
            required
            />
            <small className="form-text">A short and precise title</small>
        </div>
        <div className="form-group">
            < textarea
                cols="10" rows="2"
                placeholder="*Post" 
                name="body"
                value={body}
                onChange={(e) => onChangeHandle(e)}
                required
            />
            <small className="form-text">Write your content here</small>
        </div>
        <input className="btn add-comment" type="submit" value="Submit"/>
        </form>
    </section>
    )
}

EditPost.propTypes = {
    editPost: PropTypes.func.isRequired,
    getSinglePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { editPost, getSinglePost })(EditPost)
