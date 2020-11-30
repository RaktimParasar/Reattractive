import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories';

const Posts = props => {
    return (
        <Fragment>
            <div className="post-action-tab">
                <section className="articles">
                <a className="post-link" href="/detail-post.html">
                    <article className="post">
                        <h2>post title 1</h2>
                        <div className="post-item">
                            <div>
                                <span>Sunday 4th, 2020</span>
                                <span>11 min read</span>
                            </div>
                            <div>
                                <span>Author : Raktim Parasar</span>
                                <span>Category : Redux</span>
                            </div>
                        </div>
                        <p className="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        <div className="comment">
                            <span>Comments <span className="dot">2</span></span>
                            <span>Votes <span className="dot">2</span></span>
                        </div>
                        </article>
                </a>
                <article className="post">
                <h2>post title 2</h2>
                <div className="post-item">
                    <span>Sunday 4th, 2020</span>
                    <span>11 min read</span>
                </div>
                <p className="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </article>
                <article className="post">
                <h2>post title 3</h2>
                <div className="post-item">
                    <span>Sunday 4th, 2020</span>
                    <span>11 min read</span>
                </div>
                <p className="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </article>
        </section>
        <Categories />
    </div>
        </Fragment>
    )
}

Posts.propTypes = {

}

export default Posts
