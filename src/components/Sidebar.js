import React from 'react';
import { useState} from 'react';

import {FaUserAlt,FaBars} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Sidebar = ({children}) => {
    const[isOpen, setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path: "/Dashboard",
            name:"dashboard",
            // icon:<AiFillHome/>
        },
        {
            path:"/User",
            name:"user",
            icon:<FaUserAlt/>

        }
    ]
  return (
    <div className='container'>
        <div style={{width: isOpen? "300px":"50px"}} className="Sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen? "block":"none"}} className="logo">Logo</h1>
                <div style={{marginLeft: isOpen? "300px":"0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key= {index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen? "block":"none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar;
