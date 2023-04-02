import React, { useContext, useState } from 'react';
import "./navbar.css";
import CartWidget from '../CartWidget';
import logo from '../../assets/img/Logotipo-horizontal.png';
import { Link, NavLink } from 'react-router-dom';


const NavBar = ({categorias}) => {

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
        <Link to="/">
          <img src={logo} alt="logo" className="navIcon" />
        </Link>
        
        <ul className={state ? 'nav_menu active' : 'nav_menu'}>
          {
            categorias.map((categoria) => {
              return (
                <li key={categoria.nombre}>
                <NavLink to={categoria.url} className={({isActive})=> isActive ? 'nav_links_active' : 'nav_links'}>
                  {categoria.nombre}
                </NavLink>
                </li>            
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