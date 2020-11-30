import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Posts from './Posts';

const Homepage = props => {
    return (
        <Fragment>
            <section className="action-tab">
            <div className="sort-by">
                <p>sort post by</p>
                <div>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">date</label>
                </div>
                <div>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">vote</label>
                </div>
            </div>
                <a href="/create-post.html">
                    <button className="btn create-post">create post</button>
                </a>
            </section>
            <Posts />
        </Fragment>
    )
}

Homepage.propTypes = {

}

export default Homepage
