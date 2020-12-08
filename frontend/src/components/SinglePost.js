import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost, getSinglePost, votePost } from '../actions/post';
import { getComments, addComment } from '../actions/comments';
import Spinner from './Spinner';
import Moment from 'react-moment';
import CommentItem from './CommentItem';
import { v4 as uuidv4 } from 'uuid';

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
                  <section className="post-section">
                      <div className="single-title-top">
                          <h1 className="single-title">{post.title}</h1>
                      <div>
                          <button>Edit</button>
                          <button 
                            onClick={() => {
                              deletePost(post.id);
                              history.push('/');
                            }}
                          >Delete</button>
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
            <div className="my-2">
                <button 
                    onClick={() => setCommentToggle(!commentToggle)} 
                    type="button" 
                    className="btn create-post">
                        Add Comment
                </button>
                </div>
                {
                  commentToggle &&
                  <section className="post-section">
                    <form className="form" onSubmit={(e) => onSubmitHandle(e)}>
                      <div className="form-group">
                      <input 
                        type="text" 
                        placeholder="*Author" 
                        name="author" 
                        value={author}
                        onChange={(e) => onChangeHandle(e)}
                        />
                      <small className="form-text">Full name of author</small>
                    </div>
                  <div className="form-group">
                            < textarea
                    placeholder="*Post" 
                    name="body"
                    value={body}
                    onChange={(e) => onChangeHandle(e)}
                    />
                    <small className="form-text">Add your comment here</small>
                  </div>
                  <input type="submit" value="Submit"/>
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
  comment: state.comments
});

export default connect(mapStateToProps, { 
  getSinglePost, 
  votePost,
  getComments,
  deletePost,
  addComment
})(SinglePost)
