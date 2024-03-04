import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import { updateUserName } from '../../features/editUserSlice';
import "./EditUserName.scss"


function EditUserName({ toggleEditing }) {
  const { firstName, lastName, userName } = useSelector(state => state.profile);
  const [newUserName, setNewUserName] = useState(userName);
  const dispatch = useDispatch();

  const handleSave = () => {
    toggleEditing();
    dispatch(updateUserName(newUserName));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <form onSubmit={handleSubmit}> 

      <Input
        className="input-wrapper input-wrapper--edit"
        htmlFor="UserName"
        text="User Name: "
        type="text"
        id="UserName" 
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        autoComplete="off"
      />
<div className="edit-field">
      <Input
        className="input-wrapper input-wrapper--edit"
        htmlFor="firstname"
        text="First Name: "
        type="text"
        id="firstname" 
        disabled
        value={firstName}
      />

      <Input
        className="input-wrapper input-wrapper--edit"
        htmlFor="LastName"
        text="Last Name: "
        type="text"
        id="LastName" 
        disabled
        value={lastName}
      />
</div>
      <Button
        className="edit__button"
        text="Save"
        type="submit" 
      />

      <Button className="edit__button" text="Cancel" onClick={toggleEditing} />
    </form>
  );
}

export default EditUserName;
