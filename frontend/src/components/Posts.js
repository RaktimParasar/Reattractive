import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllPosts, getPostByCategory } from '../actions/post';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import PostItem from './PostItem';
import Categories from './Categories';
import { Link } from 'react-router-dom';


const Posts = ({ 
    match,
    getPostByCategory,
    getAllPosts, 
    post: {posts, loading}}) => {

    const [ radio, setRadio ] = useState("date");

    const handleSort = val => {
        setRadio(val);
    };

    useEffect(() => {
        match.params.category ?
            getPostByCategory(match.params.category) :
            getAllPosts();
    }, [getAllPosts, getPostByCategory, match.params.category]);

    return (
        <Fragment>
            <section className="center-items sortby-action">
                <div className="sortby-text">
                    <p>sort post by -</p>
                    <label>
                        <input
                        type="radio"
                        name="date"
                        value="date"
                        checked={radio === "date"}
                        onChange={(e) => handleSort(e.target.value)}
                        />
                        Recent
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="vote"
                        value="vote"
                        checked={radio === "vote"}
                        onChange={(e) => handleSort(e.target.value)}
                        />
                        Max Vote
                    </label>
                </div>
                    <Link to='/add/post'>
                        <button className="btn add-post">Add post</button>
                    </Link>
            </section>
            <Categories />
            <div className="articles">
                {
                    posts === null || loading ? <Spinner /> : <Fragment>
                        {
                            posts.length > 0 ? (
                            <Fragment>
                                {
                                    posts.sort((a, b) => {
                                        switch(radio) {
                                            case 'vote':
                                                return b.voteScore - a.voteScore;
                                            case 'date':
                                                return b.timestamp - a.timestamp;
                                            default:
                                                return a.voteScore - b.voteScore;
                                        }
                                    })
                                    .map(post => (
                                        <PostItem key={post.id} post={post} />
                            ))
                                }
                            </Fragment>
                            ) : (
                            <Fragment>
                                <h4>No post found, Create a new post</h4>
                            </Fragment>
                            )
                }
                    </Fragment>
                }
            </div>
        </Fragment>
    )
}

Posts.propTypes = {
    getAllPosts: PropTypes.func.isRequired,
    getPostByCategory: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { 
    getAllPosts,
    getPostByCategory
})(Posts)
