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
        <div className="categories center-items">
            <h4>Categories</h4>
            {
                categories === null || loading ? <Spinner /> : <Fragment>
                    <Link to='/'>All</Link>
                {
                    categories.length > 0 && categories.map(category => (
                        <Link 
                        key={category.path}
                        to={`/${category.path}`}
                        onClick={() => getPostByCategory(category.path)}
                        >{category.name}</Link>
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
