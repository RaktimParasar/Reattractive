import React, { Fragment } from 'react'

const Navbar = props => {
    return (
        <Fragment>
            <nav>
                <div className="nav-center">
                    <h1>minimal blog</h1>
                    <button className="btn dark-mode">toggle</button>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar