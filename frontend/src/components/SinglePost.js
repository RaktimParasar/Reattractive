import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSinglePost, votePost } from '../actions/post';
import { getComments } from '../actions/comments';
import Spinner from './Spinner';
import Moment from 'react-moment';
import CommentItem from './CommentItem';

const SinglePost = ({ match, 
  getSinglePost,
  votePost, 
  getComments,
  comment: { comments, loader },
  post: { post, loading } 
}) => {

  useEffect(() => {
  getSinglePost(match.params.id);
  getComments(match.params.id);
  }, [getComments, getSinglePost, match.params.id]);

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
                              <span>by {post.author}</span>, 
                              <span>on <Moment format='MMMM Do, YYYY'>{post.timestamp}</Moment></span>
                          </p>
                          <p>
                              <span>Category: {post.category}</span>, 
                              <span>Total vote <span className="dot">{post.voteScore}</span></span>
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
                              <button 
                                onClick={() => votePost(post.id, 'upVote')}
                                >
                                UpVote
                              </button>
                              <button 
                                onClick={() => votePost(post.id, 'downVote')}
                                >
                                DownVote
                              </button>
                          </div>
                      </div>
                  </section>
              </Fragment>
            }
              {
                comments === null || loader ? <Spinner /> : <Fragment>
                  {
                    comments.map(comment => (
                      <CommentItem key={comment.id} comment={comment} />
                ))}
              </Fragment>
              }
      </Fragment>
  )
};

SinglePost.propTypes = {
  post: PropTypes.object.isRequired,
  getSinglePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
  comment: state.comments
});

export default connect(mapStateToProps, { 
  getSinglePost, 
  votePost,
  getComments,
})(SinglePost)
