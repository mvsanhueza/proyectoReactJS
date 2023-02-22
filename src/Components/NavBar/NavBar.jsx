import React, { useState } from 'react';
import "./navbar.css";
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/img/Logotipo-horizontal.png';


const NavBar = () => {

  //Lista de botones para el menú
  const menuItems = [
    {
      title: "Tienda",
      url: "#",
    },
    {
      title: "Nosotros",
      url: "#",
    },
    {
      title: "Contacto",
      url: "#",
    }
  ];

  //User state para la versión mobile
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  }

  return (
    <div className="container">
      <nav className="navBarItems">
        <div className="menu_icon" onClick={handleClick}>
          <i className={"fa-solid fa-bars" + (state ? " icon_rotate" : "")}></i>
        </div>
        <img src={logo} alt="logo" className="navIcon" />
        <ul className={state ? 'nav_menu active' : 'nav_menu'}>
          {
            menuItems.map((item, index) => {
              return (
                <li key={index}><a className='nav_links' href={item.url}>{item.title}</a></li>
              )
            })}
        </ul>
        <div className='nav_cart'>
          <CartWidget/>
        </div>        
      </nav>
    </div>
  )
}

export default NavBar