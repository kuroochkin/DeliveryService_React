import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './sidebar.scss';

import {
    FaBars,
    FaUserAlt,
    FaWeightHanging,
    FaSignOutAlt,
    FaShoppingCart}
    from 'react-icons/fa';


const SidebarForCourier = () => {

    const[isOpen ,setIsOpen] = useState(true);

    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[   
        {
            path:"/about",
            name:"Мой профиль",
            icon:<FaUserAlt/>
        },
        {
            path:"/allOrdersByCreate",
            name:"Непринятые заказы",
            icon:<FaWeightHanging/>
        },
        {
            path:"/courierOrders/Progress",
            name:"Действующие заказы",
            icon:<FaWeightHanging/>
        },
        {
            path:"/courierOrders/Complete",
            name:"Завершенные заказы",
            icon:<FaWeightHanging/>
        }
    ]

    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                <Link to={"/home"}>
                    <h1 style={{display: isOpen ? "block" : "none", "color": "white"}} className="logo">Самокат</h1>
                </Link>
                   <div style={{marginLeft: isOpen ? "25px" : "0px"}} className="bars">
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

export default SidebarForCourier;