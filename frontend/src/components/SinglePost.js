import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSinglePost } from '../actions/post';
import Spinner from './Spinner';
import Moment from 'react-moment';

const SinglePost = ({ match, 
    getSinglePost, 
    post: {post, loading} 
}) => {

    useEffect(() => {
        getSinglePost(match.params.id)
    }, [getSinglePost, match.params.id]);

    return (
        <Fragment>
            {
                post === null || loading ? <Spinner /> : <Fragment>
                    <section className="post-section">
                        <div className="single-title-top">
                            <h1 className="single-title">{post.title}</h1>
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        </div>
                        <div>
                            <p>
                                <span>by {post.author}</span>, <span>on <Moment format='MMMM Do, YYYY'>{post.timestamp}</Moment></span>
                            </p>
                            <p>
                                <span>Category: {post.category}</span>, <span>Total vote <span className="dot">{post.voteScore}</span></span>
                            </p>
                        </div>
                        <p>{post.body}</p>
                        <div className="single-title-top">
                            <p>{
                                post.commentCount > 1 ? "Comments" : "Comment"
                                }{' '}
                                <span className="dot">{post.commentCount}</span>
                            </p>
                            <div>
                                <button>UpVote</button>
                                <button>DownVote</button>
                            </div>
                        </div>
                    </section>
                </Fragment>
            }
        </Fragment>
    )
};

SinglePost.propTypes = {
    post: PropTypes.object.isRequired,
    getSinglePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getSinglePost })(SinglePost)
