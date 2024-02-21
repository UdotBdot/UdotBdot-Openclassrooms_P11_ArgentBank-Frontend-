import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Form.scss"
import Input from '../Input/Input';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Form() {
    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />

          <h1>Sign In</h1>
          <form>
            <Input 
              className="input-wrapper"
              htmlFor="username"
              type="text"
              id="username"
              text="Username"
            />
            <Input 
            className="input-wrapper"
            htmlFor="password"
            type="password"
            id="password"
            text="Password"
            />
            <Input 
            className="input-remember"
            htmlFor="remember-me"
            type="checkbox"
            id="remember-me"
            text="Remember me"
            />
            <NavLink to={"/profile"} className="sign-in-button">Sign In</NavLink>
          </form>
        </section>
      </main>
    );
  }

    
  


export default Form