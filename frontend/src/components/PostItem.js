import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  //read time
  const wordsPerMinute = 200;
  let textLength = post.body.split(" ").length;
  let totalTime;
  if (textLength > 0) {
    let value = Math.ceil(textLength / wordsPerMinute);
    if (textLength < wordsPerMinute) {
      totalTime = "less than a min read";
    } else {
      totalTime = `${value} min read`;
    }
  }

  return (
    <article key={post.id} className="post">
      <Link to={`/posts/${post.id}`}>
        <h2>
          {post.title.length > 50
            ? `${post.title.slice(0, 50)}...`
            : post.title}
        </h2>
      </Link>
      <div className="post-item">
        <div>
          <span>
            <Moment format="MMMM Do, YYYY">{post.timestamp}</Moment>
          </span>
          <span>{totalTime}</span>
        </div>
        <div>
          <span>Author : {post.author}</span>
          <span>Category : {post.category}</span>
        </div>
      </div>
      <p className="post-text">
        {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
      </p>
      {post.body.length > 100 && (
        <span style={{ fontStyle: "italic" }}>
          <Link to={`/posts/${post.id}`}>Read more</Link>
        </span>
      )}
      <div className="like-counter">
        <span>
          {post.commentCount > 1 ? "Comments" : "Comment"}{" "}
          <span className="dot">{post.commentCount}</span>
        </span>
        <span>
          {post.voteScore > 1 ? "Votes" : "Vote"}{" "}
          <span className="dot">{post.voteScore}</span>
        </span>
      </div>
    </article>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
