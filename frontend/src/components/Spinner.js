import React, { Fragment } from 'react'
import spinner from '../img/spinner.gif'

const Spinner = () => {
    return (
        <Fragment>
            <img 
                src={spinner}
                style={{ margin: 'auto', display: 'block', width: '30px'}}
                alt='Loading...'
            />
        </Fragment>
    )
}

export default Spinner