import React from 'react'
import "./Header.scss"
import ABLogo from "../../assets/img/argentBankLogo.webp";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Header() {
  return (
<nav className="navigation">
  <a className="navigation__logo" href="./index.html">
    <img
      className="navigation__logo--image"
      src= {ABLogo}
      alt="Argent Bank Logo"
    />
    <h1 className="sr-only">Argent Bank</h1>
  </a>
  <div>
    <a className="navigation__item" href="./sign-in.html">
    <FontAwesomeIcon icon={faCircleUser} />
      Sign In
    </a>
  </div>
</nav>

  )
}

export default Header