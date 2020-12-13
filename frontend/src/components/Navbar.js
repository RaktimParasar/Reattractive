import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const getStorageTheme = () => {
    let theme = 'light-theme'
    if(localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme')
    }
    return theme
}
const Navbar = () => {
    const [theme, setTheme] = useState(getStorageTheme())

    const toggleTheme = () => {
        if(theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme')
        }
    };

    useEffect(() => {
        document.documentElement.className = theme
        localStorage.setItem('theme', theme)
    }, [theme]);
    
    return (
        <Fragment>
            <nav>
                <div className="navbar center-items">
                    <Link to='/'><h1>reattractive</h1></Link>
                    <div onClick={toggleTheme} className="dark-mode"><i class="fas fa-sun"></i></div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar