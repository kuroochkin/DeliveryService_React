import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

import {
    FaBars,
    FaUserAlt,
    FaWeightHanging}
    from 'react-icons/fa';


const Sidebar = () => {

    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[   
        {
            path:"/about",
            name:"Мой профиль",
            icon:<FaUserAlt/>
        },
        {
            path:"/orders",
            name:"Мои заказы",
            icon:<FaWeightHanging/>
        }
        
    ]

    return (
        <div className="container">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Самокат</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
        </div>
    );
}

export default Sidebar;