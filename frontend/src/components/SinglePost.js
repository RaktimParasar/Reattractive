import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSinglePost, votePost } from '../actions/post';
import { getComments } from '../actions/comments';
import Spinner from './Spinner';
import Moment from 'react-moment';

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
                            <button>{
                                    comment.voteScore > 1 ? "Likes" : "Like"
                                    }{' '}
                                    <span>{comment.voteScore}</span></button>
                            <button>Dislike</button>
                          </div>
                            <div>
                              <button>Edit</button>
                              <button>Delete</button>
                            </div>
                          </div>
                      </div>
                  </div>
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
  getComments
})(SinglePost)
