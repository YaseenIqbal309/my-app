import React from 'react'
import  Logo from '../../assets/Logo.png'
import NavLink from '../navlink/navlink.component'
import CustomBtn from '../custombtn/custombtn.component' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import './header.styles.css'
import { useState } from 'react'

const  Header= ()=>{

    
   

    return (
        <div className="both">
             <div className='header'>
                <div className="logo-container">
                <img src={Logo} alt="" />
                </div>
                <ul className="options">
                
                        <NavLink href="#" >Ground Truth Data</NavLink>
                        <NavLink href="#" >How it Work</NavLink>
                        <NavLink href="#" >Fee Structure</NavLink>
                        <NavLink href="#" >Example Deliverables </NavLink>
                        <NavLink href="#" >Submission Pannel </NavLink>
                        <NavLink href="#" >Contact Us</NavLink>
                        <CustomBtn SignIn>Sign In</CustomBtn>
                
                </ul>
                <button className='toggle'>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                  
                </button>


            </div>
            <div className="mobile-view">
               
            
            </div>
   
        </div>
        );
}



export default Header;