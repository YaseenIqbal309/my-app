import React from 'react'
import './navlink.styles.css'

const NavLink = ({children,...otherProps}) => (
    <li className="option">
        <a {...otherProps} className=''>
            {children}
        </a>
    </li>
);
export default NavLink;