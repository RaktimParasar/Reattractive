import React, { Fragment } from 'react'

const Navbar = props => {
    return (
        <Fragment>
            <nav>
                <div class="nav-center">
                    <h1>minimal blog</h1>
                    <button class="btn dark-mode">toggle</button>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar