import React from 'react'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGetProfile } from "../../features/editUserSlice"
import "./UserEdit.scss"
import axios from 'axios'
import Button from '../Button/Button'

function User() {

  const token = useSelector(state => state.auth.token)
  const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch()

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

  return (
    <>
      <div className="edit">
        <h1>Welcome back<br />{profile.firstName + " " + profile.lastName + "!"}</h1>
        <Button
        className="edit__button"
        text="Edit Button"
        />
      </div>
    </>
  )
}

export default User