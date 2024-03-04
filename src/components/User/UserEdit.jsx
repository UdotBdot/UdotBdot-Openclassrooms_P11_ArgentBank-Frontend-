import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../../features/editUserSlice';
import EditUserName from '../EditUserName/EditUserName';
import "./UserEdit.scss"

function User() {
  useSelector(state => state.auth.token);
  const { email, firstName, lastName } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  dispatch(fetchUserProfile());

  return (
    <div className="edit">
      {email && (
        <>
          <h1>Welcome back<br />{firstName} {lastName}!</h1>
          <EditUserName />
        </>
      )}
    </div>
  );
}

export default User;
