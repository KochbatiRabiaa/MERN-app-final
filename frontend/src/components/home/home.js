import React from "react";
import { useSelector } from "react-redux";
import "./home.css";
import bookpg from "../../assests/img/book.jpg";
import videoSource from '../../assests/books.mp4'
import { Link } from "react-router-dom";
const Home = () => {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} =userLogin
  return (

    <div className="Container" >
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        
      </video>
      <div className="Content" >
{userInfo? (<h3>Welcome to KeyTeb</h3>):
     ( 
        <div className="SubContent" >
          <button type="button" 
                  className="btn btn-outline-dark" >
            <Link to="/register">Register</Link>
          </button>
          <button type="button" className="btn btn-outline-dark"  >
            <Link to='/login'>Login</Link>
          </button>
        <img src={bookpg} alt="profile" />
        
          </div>
          
          )}
        
       
      </div>
    </div>
  );
};

export default Home;
