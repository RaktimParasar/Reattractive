import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../actions/categories';
import { getPostByCategory } from '../actions/post';
import Spinner from './Spinner';


const Categories = ({ 
    getCategories,
    getPostByCategory,
    categories: { categories, loading} 
}) => {
    
    useEffect(() => {
        getCategories()
    }, [getCategories]);
    
    return (
        <div className="category">
            <h3 className="category-text">Categories</h3>
            {
                categories === null || loading ? <Spinner /> : <Fragment>
                    <button className="category-btn active-btn">
                        <Link to='/'>All</Link>
                    </button>
                {
                    categories.length > 0 && categories.map(category => (
                    <button key={category.path} className="category-btn">
                        <Link 
                        to={`/${category.path}`}
                        onClick={() => getPostByCategory(category.path)}
                        >{category.name}</Link>
                    </button>
                    ))
                }
                </Fragment>
            }
        </div>
    )
}

Categories.propTypes = {
    getCategories: PropTypes.func.isRequired,
    categories: PropTypes.object.isRequired,
    getPostByCategory: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    categories: state.categories
});

export default connect(mapStateToProps, { 
    getCategories,
    getPostByCategory,
})(Categories)
