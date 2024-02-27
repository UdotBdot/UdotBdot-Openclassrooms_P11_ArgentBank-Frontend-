import React from 'react'
import { faCircleUser, faRightFromBracket  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import "../Header/Header.scss"
import { logOut } from '../../features/authSlice'; 
import { useDispatch, useSelector } from "react-redux";

function HeaderConnect() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const dataUser = useSelector((state) => state.auth.user);
  
    const handleLogOut = (e) => {
      e.preventDefault();
      dispatch(logOut(navigate("/login")));
      sessionStorage.removeItem("token");
    };

  return (
    <>
        <div>
        {/* <NavLink to="/profile" className="navigation__item">
        <FontAwesomeIcon icon={faRightFromBracket} />
          {dataUser?.userName}
        </NavLink> */}

        <NavLink className="navigation__item" onClick={handleLogOut}>
        <FontAwesomeIcon icon={faCircleUser} />
          Sign Out
        </NavLink>
      </div>
    </>
  )
}

export default HeaderConnect