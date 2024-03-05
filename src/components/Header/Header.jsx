import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Header.scss"
import ABLogo from "../../assets/img/argentBankLogo.webp";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  HeaderConnect  from "../HeaderConnect/HeaderConnect"
import {  useSelector } from "react-redux"


function Header() {

  const loggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
<nav className="navigation">
  <NavLink className="navigation__logo" to={"/"}>
    <img
      className="navigation__logo--image"
      src= {ABLogo}
      alt="Argent Bank Logo"
    />
    <h1 className="sr-only">Argent Bank</h1>
  </NavLink>

  {loggedIn ? <HeaderConnect/> : 
  <div>
    <NavLink to="/login" className="navigation__item">
    <FontAwesomeIcon icon={faCircleUser}/>
      Sign In
    </NavLink>
  </div> }
  
</nav>
  )
}

export default Header