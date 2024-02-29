import React from 'react'
import { useState, useEffect } from 'react';
import "./Form.scss"
import Input from '../Input/Input';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { loginError, loginSuccess } from '../../features/authSlice';

function Form() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.auth.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError1, setLoginError1] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoginError1(false);
    }, 1500);
  
    return () => clearTimeout(timeout);
  }, [loginError1]);
  
  const fetchLogIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email,
        password,
      });
      const data = response.data;
      const token = data.body.token;

      rememberMe ? localStorage.setItem('token', token) : sessionStorage.setItem('token', token);

      dispatch(loginSuccess({ token }));
      navigate("/profile");
    } catch (err) {
      if  (err.response && err.response.status === 400) {
        dispatch(loginError({ error: err.response.data.message }));
        setLoginError1(true); 
        sessionStorage.removeItem("token");
      } else {
        console.error(err);
      }
    }
  };
  
    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
        <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />

          <h1>Sign In</h1>
          <form onSubmit={fetchLogIn}>
            <Input 
              className="input-wrapper"
              htmlFor="username"
              type="text"
              id="username"
              text="Username"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input 
            className="input-wrapper"
            htmlFor="password"
            type="password"
            id="password"
            text="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            />
            <Input 
            className="input-remember"
            htmlFor="remember-me"
            type="checkbox"
            id="remember-me"
            text="Remember me"
            value={rememberMe}
            onChange={(e) => {
              setRememberMe(e.target.checked);
            }}
            />
            <button className="sign-in-button">Sign In</button>
            {loginError1 && <div className="error-message">{ message }</div>}
          </form>
        </section>
      </main>
    );
  }

export default Form