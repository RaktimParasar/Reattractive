import React, { Fragment } from 'react';
import Posts from './Posts';

const Homepage = (props) => {
    

    return (
        <Fragment>
            
            <Posts {...props}/>
                
        </Fragment>
    )
}


//      ***** IMPORTANT *****
// DELETE this component and merge with Posts.js

export default Homepage
