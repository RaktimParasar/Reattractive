import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { voteComments, deleteComment } from '../actions/comments';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CommentItem = ({ 
    comment, 
    voteComments, 
    deleteComment,
}) => {
    
    return (
        <div key={comment.id} className="single-post mx-2">
            <div  className="comment-container">
                <div className="avatar">
                    <h1>{comment.author.substring(0, 2)}</h1>
                </div>
                <div>
                <p class="comment-name">{comment.author}</p>
                <p class="comment-body">{comment.body}</p>
                <p class="comment-body comment-time"><Moment format='MMMM Do, YYYY'>{comment.timestamp}</Moment></p>
            </div>
            </div>
            <div className="comment-action center-items">
                <div className="align-left">
                    <button 
                        className="btn add-post text-size" 
                        onClick={() => voteComments(comment.id, 'upVote')}>
                        <i class="far fa-thumbs-up" />{' '}<span>{comment.voteScore}</span>
                    </button>{' '}
                    <button 
                        className="btn add-post text-size" 
                        onClick={() => voteComments(comment.id, 'downVote')}>
                        <i class="far fa-thumbs-down" />
                    </button>
                </div>
                <div>
                    <button className="btn add-post text-size">
                        <Link 
                            to={`/editcomment/${comment.id}`}>
                            <i class="far fa-edit" />
                        </Link>
                    </button>{' '}
                    <button 
                        className="btn add-post text-size" 
                        onClick={() => deleteComment(comment.id)}>
                        <i class="far fa-trash-alt" />
                    </button>
                </div>
            </div>
        </div>
    )
}

CommentItem.propTypes = {
    voteComments: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
};


export default connect(null, { 
    voteComments, 
    deleteComment, 
})(CommentItem)
