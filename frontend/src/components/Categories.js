import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories } from '../actions/categories';


const Categories = ({ getCategories, categories: { categories, loading} }) => {
    
    useEffect(() => {
        getCategories()
    }, [getCategories]);

    return (
        <Fragment>
            <section className="category">
                <h3 className="category-text">Categories</h3>
                <button className="category-btn active-btn">All</button>
                {
                    categories && categories.map(category => (
                    <button key={category.path} className="category-btn">{category.name}</button>
                    ))
                }
            </section>
        </Fragment>
    )
}

Categories.propTypes = {
    getCategories: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    categories: state.categories
});

export default connect(mapStateToProps, { getCategories })(Categories)
