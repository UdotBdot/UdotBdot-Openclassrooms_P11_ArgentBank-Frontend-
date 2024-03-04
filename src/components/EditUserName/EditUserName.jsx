import React from 'react';
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';

function EditUserName() {

  return (
    <form> 
      <Button
        className="edit__button"
        text="Edit"
      />

      <Input
        htmlFor="UserName"
        text="User Name "
        type="text"
        id="UserName" // Ajout de l'attribut id
        // onChange={(e) => setNewUserName(e.target.value)}
        autocomplete="off"
      />

      <Input
        htmlFor="firstname"
        text="First Name "
        type="text"
        id="firstname" // Ajout de l'attribut id
        disabled
        // value={profile.firstName}
      />

      <Input
        htmlFor="LastName"
        text="Last Name "
        type="text"
        id="LastName" // Ajout de l'attribut id
        disabled
        // value={profile.lastName}
      />

      <Button
        className="edit__button"
        text="Save"
        type="submit" 
      />

      <Button className="edit__button" text="Cancel" />
      {/* <div>{profile.userName}</div> */}
    </form>
  );
}

export default EditUserName;
