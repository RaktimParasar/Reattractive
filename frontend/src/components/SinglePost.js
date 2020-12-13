import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost, getSinglePost, votePost } from '../actions/post';
import { getComments, addComment } from '../actions/comments';
import Spinner from './Spinner';
import Moment from 'react-moment';
import CommentItem from './CommentItem';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const SinglePost = ({ match, 
  getSinglePost,
  votePost, 
  getComments,
  deletePost,
  history,
  addComment,
  comment: { comments, loader },
  post: { post, loading } 
}) => {

  const initialState = {
    timestamp: Date.now(),
    id: uuidv4(),
    author: '',
    body: '',
    parentId: match.params.id
  };

  const [data, setData] = useState(initialState)
  const [commentToggle, setCommentToggle] = useState(false);


  useEffect(() => {
  getSinglePost(match.params.id);
  getComments(match.params.id);
  }, [getComments, getSinglePost, match.params.id]);

  const { author, body } = data;

  const onChangeHandle = e => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    })
  };

  const onSubmitHandle = e => {
    e.preventDefault();
    addComment(data);
    setCommentToggle(!commentToggle);
    setData(e.target.value = "")
  };

  return (
      <Fragment>
          {
              post === null || loading ? <Spinner /> : <Fragment>
                  <section className="single-post">
                      <div>
                          <h1 className="single-title">{post.title}</h1>
                          <div className="float">
                            <button className="btn add-post text-size">
                              <Link to={`/edit/${post.id}`}><i className="far fa-edit"></i></Link>
                            </button>{' '}
                            <button 
                              className="btn add-post text-size"
                              onClick={() => {
                                deletePost(post.id);
                                history.push('/');
                              }}
                              ><i className="far fa-trash-alt"></i>
                            </button>
                          </div>
                      </div>
                      <div className="main-post-item">
                          <p>
                              <span>by {post.author}</span>,{' '}
                              <span>on <Moment format='MMMM Do, YYYY'>{post.timestamp}</Moment></span>
                          </p>
                          <p>
                              <span>Category: {post.category}</span>,{' '}
                              <span>Total vote <span className="dot regular">{post.voteScore}</span></span>
                          </p>
                      </div>
                      <p className="post-text">{post.body}</p>
                      <div className="center-items comment-counter">
                          <p>{
                              post.commentCount > 1 ? "Comments" : "Comment"
                              }{' '}
                              <span className="dot">{comments && comments.length}</span>
                          </p>
                          <div>
                              <button 
                                className="btn add-post text-size"
                                onClick={() => votePost(post.id, 'upVote')}
                                >
                                <i className="far fa-thumbs-up"></i>
                              </button>{' '}
                              <button 
                                className="btn add-post text-size"
                                onClick={() => votePost(post.id, 'downVote')}
                                >
                                <i className="far fa-thumbs-down"></i>
                              </button>
                          </div>
                      </div>
                  </section>
              </Fragment>
            }
                <button 
                    onClick={() => setCommentToggle(!commentToggle)} 
                    type="button" 
                    className="btn add-comment">
                        Add Comment <i className="fas fa-plus-circle"></i>
                </button>
                {
                  commentToggle &&
                  <section className="form-main my-2">
                    <form className="form" onSubmit={(e) => onSubmitHandle(e)}>
                      <div className="form-group">
                      <input 
                        type="text" 
                        placeholder="*Name" 
                        name="author" 
                        value={author}
                        onChange={(e) => onChangeHandle(e)}
                        required
                        />
                      <small className="form-text">Enter your full name</small>
                    </div>
                  <div className="form-group">
                    < textarea
                      cols="10" rows="2"
                      placeholder="*Comment" 
                      name="body"
                      value={body}
                      onChange={(e) => onChangeHandle(e)}
                      required
                    />
                    <small className="form-text">Add your comment here</small>
                  </div>
                  <input className="btn add-comment" type="submit" value="Submit"/>
                </form>
                </section>
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
  comment: PropTypes.object.isRequired,
  getSinglePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
  comment: state.comments,
});

export default connect(mapStateToProps, { 
  getSinglePost, 
  votePost,
  getComments,
  deletePost,
  addComment,
})(SinglePost)
