import React from 'react'
import NavLink from '../navlink/navlink.component'
import CustomBtn from '../custombtn/custombtn.component' 
import './mobilenav.styles.css'
const MobileNav =({isOpen})=> {
    
    return (
    <ul className={`mobile-options ${isOpen ? 'mobile-visible':''}`}>
                
            <NavLink href="#" >Ground Truth Data</NavLink>
            <NavLink href="#" >How it Work</NavLink>
            <NavLink href="#" >Fee Structure</NavLink>
            <NavLink href="#" >Example Deliverables </NavLink>
            <NavLink href="#" >Submission Pannel </NavLink>
            <NavLink href="#" >Contact Us</NavLink>
            <CustomBtn SignIn>Sign In</CustomBtn>
    </ul> );


}
export default MobileNav;