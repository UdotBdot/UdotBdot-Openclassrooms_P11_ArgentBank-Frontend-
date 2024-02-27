import React from 'react'
import { faCircleUser, faRightFromBracket  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import "../Header/Header.scss"
import { logOut } from '../../features/authSlice'; 
import {setGetProfile} from "../../features/editUserSlice"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import axios from 'axios';


function HeaderConnect() {

  const token = useSelector(state => state.auth.token)
  const profile = useSelector((state) => state.profile)

  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await axios.post("http://localhost:3001/api/v1/user/profile", {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token") || sessionStorage.getItem("token")}`,
          },
        });
        const data = response.data; 
        dispatch(setGetProfile({ data }));
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataUser();
  }, [token]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
  
    const handleLogOut = (e) => {
      e.preventDefault();
      dispatch(logOut(navigate("/login")));
      sessionStorage.removeItem("token");
    };

  return (
    <>
        <div>
         <NavLink to="/profile" className="navigation__item">
        <FontAwesomeIcon icon={faRightFromBracket} />{profile.userName}
        </NavLink> 

        <NavLink className="navigation__item" onClick={handleLogOut}>
        <FontAwesomeIcon icon={faCircleUser} />
          Log Out
        </NavLink>
      </div>
    </>
  )
}

export default HeaderConnect