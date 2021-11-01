import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/actions/userAction";
import "./profile.css";
import pic from "../../assests/img/bookpic.jpg";

import { Link } from "react-router-dom";


const Profile = () => {
  

  const userProfile = useSelector((state) => state.userProfile);
  const { user } = userProfile;

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile(userInfo._id));
   
  }, [dispatch, userInfo]);
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { userUpdate } = userUpdateProfile;

  return (
    <>
      <div className="card" style={{ width: "600px" }}>
        <img src={pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{user?.name || userUpdate?.name}</h5>
          <p className="card-text">{user?.email || userUpdate?.email}</p>
          <Link to="/user-update" className="btn btn-primary">
            Update your profile
          </Link>
        </div>
      </div>

    
        <>
          {/* <h1>You don't have any book created.</h1>*/}
          <Link to="/addBook">
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Click to add a new book.
            </button>
          </Link>
        </>
      
    </>
  );}

export default Profile;
