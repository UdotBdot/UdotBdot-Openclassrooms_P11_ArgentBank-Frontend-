import React, { useState, useEffect } from 'react';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setEditProfile } from '../../features/editUserSlice.js';

function EditUserName() {
  const [newUserName, setNewUserName] = useState('');
  const token = useSelector((state) => state.auth.token);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewUserName(profile.userName)
  },[profile.userName])

  const handleEditUserName = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { username: newUserName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(setEditProfile(newUserName))
    } catch (error) {
      // Gérer les erreurs
    }
  };

  return (
    <form onSubmit={handleEditUserName}> 
      <Button
        className="edit__button"
        text="Edit"
      />

      <Input
        htmlFor="UserName"
        text="User Name "
        type="text"
        id="UserName" // Ajout de l'attribut id
        onChange={(e) => setNewUserName(e.target.value)}
        autocomplete="off"
      />

      <Input
        htmlFor="firstname"
        text="First Name "
        type="text"
        id="firstname" // Ajout de l'attribut id
        disabled
        value={profile.firstName}
      />

      <Input
        htmlFor="LastName"
        text="Last Name "
        type="text"
        id="LastName" // Ajout de l'attribut id
        disabled
        value={profile.lastName}
      />

      <Button
        className="edit__button"
        text="Save"
        type="submit" 
      />

      <Button className="edit__button" text="Cancel" />
      <div>{profile.userName}</div>
    </form>
  );
}

export default EditUserName;
