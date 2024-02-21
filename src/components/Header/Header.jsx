import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Header.scss"
import ABLogo from "../../assets/img/argentBankLogo.webp";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Header() {
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
  <div>
    <NavLink className="navigation__item" to="/login">
    <FontAwesomeIcon icon={faCircleUser} />
      Sign In
    </NavLink>
  </div>
</nav>

  )
}

export default Header