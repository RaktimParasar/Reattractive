import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllPosts } from '../actions/post';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import Spinner from './Spinner';

const Posts = ({ getAllPosts, post: {posts, loading}}) => {

    useEffect(() => {
        getAllPosts()
    }, [getAllPosts]);

    return (
        <Fragment>
            {
                posts === null || loading ? <Spinner /> : <Fragment>
                    {
                        posts.length > 0 ? (
                        <Fragment>
                            {
                                posts.map(post => (
                                    <article key={post.id} className="post">
                                        <a className="post-link" href="/detail-post.html">
                                            <h2>{post.title}</h2>
                                        </a>
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
                                                    <span className="dot">{post.commentCount}</span></p>
                                            <p>
                                                {
                                                    post.voteScore > 1 ? "Votes" : "Vote"
                                                }{' '}
                                                    <span className="dot">{post.voteScore}</span></p>
                                        </div>
                                    </article>
                        ))
                            }
                        </Fragment>
                        ) : (
                        <Fragment>
                            <h4>No post yet , Create a new post</h4>
                        </Fragment>
                        )
                            
            }
                </Fragment>
            }
            
        </Fragment>
    )
}

Posts.propTypes = {
    getAllPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getAllPosts })(Posts)
