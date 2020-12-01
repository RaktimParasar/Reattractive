import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import Posts from './Posts';
import Categories from './Categories';

const Homepage = () => {
    return (
        <Fragment>
            <div className="action-tab">
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
            </div>
            <div className="post-action-tab">
                <section className="articles">
                    <Posts />
                </section>    
                <Categories />
            </div>
        </Fragment>
    )
}

// Homepage.propTypes = {

// }

export default Homepage
