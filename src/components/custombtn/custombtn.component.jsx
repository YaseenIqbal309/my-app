import React from 'react'
import './custombtn.styles.css'

const CustomBtn = ({children,SignIn,...otherProps}) => (
    <button className={`${SignIn ? 'sign-in'  :  ''} custom-button`} {...otherProps}>
        {children}
    </button>
);
export default CustomBtn;