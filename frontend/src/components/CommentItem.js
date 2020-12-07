import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { voteComments } from '../actions/comments';
import { connect } from 'react-redux';

const CommentItem = ({comment, voteComments}) => {
    return (
        <div key={comment.id} className="comment-container post-section">
            <div className="avatar">
                <h1>{comment.author.substring(0, 2)}</h1>
            </div>
            <div>
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
            <p><Moment format='MMMM Do, YYYY'>{comment.timestamp}</Moment></p>
            <div className="comment-action">
                <div>
                <button onClick={() => voteComments(comment.id, 'upVote')}>{
                        comment.voteScore > 1 ? "Likes" : "Like"
                        }{' '}
                        <span>{comment.voteScore}</span></button>
                <button onClick={() => voteComments(comment.id, 'downVote')}>Dislike</button>
                </div>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                </div>
            </div>
        </div>
    )
}

CommentItem.propTypes = {
    voteComments: PropTypes.func.isRequired,
};

export default connect(null, { voteComments })(CommentItem)
