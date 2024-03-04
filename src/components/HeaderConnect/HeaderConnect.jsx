import React from 'react';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import '../Header/Header.scss';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom';


function HeaderConnect() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut(navigate("/login")));
    sessionStorage.removeItem("token");
  };

  return (
    <>
      <div>
        <NavLink to="/profile" className="navigation__item">
          <FontAwesomeIcon icon={faRightFromBracket} />{' '}
        </NavLink>

        <NavLink className="navigation__item" onClick={handleLogOut}>
          <FontAwesomeIcon icon={faCircleUser} />
          Log Out
        </NavLink>
      </div>
    </>
  );
}

export default HeaderConnect;
