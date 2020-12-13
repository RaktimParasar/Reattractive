import React, { useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { editComment, getSingleComment } from '../actions/comments';
import { connect } from 'react-redux';

const initialState = {
    timestamp: Date.now(),
    body: ''
};

const EditComment = ({
    match, 
    editComment, 
    history,
    getSingleComment,
    comment: { singleComment }
}) => {
    const [ data, setData ] = useState(initialState);
    
    useEffect(() => {
        getSingleComment(match.params.id);
            setData({
                body: singleComment.body
            });
    }, [getSingleComment, match.params.id, singleComment.body]);

    const { body } = data; 

    const onChangeHandle = e => {
    const { name, value } = e.target;
    setData({
        ...data,
        [name]: value
        })
    };
    
    const onSubmitHandle = e => {
        e.preventDefault();
        editComment(data, singleComment.id);
        history.push(`/posts/${singleComment.parentId}`)
    }
    return (
        <section className="form-main">
        <h1>
            Edit Comment
        </h1>
        <small>* = required field</small>
        <form className="form" onSubmit={(e) => onSubmitHandle(e)}>
        <div className="form-group">
            < textarea
                cols="10" rows="2"
                placeholder="*Comment" 
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

EditComment.propTypes = {
    editComment: PropTypes.func.isRequired,
    getSingleComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    comment: state.comments
})

export default connect(mapStateToProps, { editComment, getSingleComment })(EditComment)
