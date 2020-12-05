import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';


const PostItem = ({ post }) => {
    return (
        <article key={post.id} className="post">
            <Link className="post-link" to={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
            </Link>
            <div className="post-item">
                <div>
                    <span><Moment format='MMMM Do, YYYY'>{post.timestamp}</Moment></span>
                    <span>11 min read</span>
                </div>
                <div>
                    <span>Author : {post.author}</span>
                    <span>Category : {post.category}</span>
                </div>
            </div>
            <p className="post-text">{post.body}</p>
            <div className="comment">
                <p>
                    {
                        post.commentCount > 1 ? "Comments" : "Comment"
                    }{' '}
                        <span className="dot">{post.commentCount}</span>
                </p>
                <p>
                    {
                        post.voteScore > 1 ? "Votes" : "Vote"
                    }{' '}
                        <span className="dot">{post.voteScore}</span>
                </p>
            </div>
        </article>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostItem
