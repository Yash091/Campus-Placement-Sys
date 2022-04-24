import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { AppContext } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

const Navbar = () => {

  const navigate = useNavigate();
  const { userData , setUserData} = useContext(AppContext)
  const handleLogout = () => {
    window.localStorage.clear();
    setUserData(null);
    navigate("/");
  }

  return (
    <div className="navbar">
        <div className="name"><Link to="/" style={{color: 'inherit', textDecoration: 'none' }}>Cam<span>Rec</span></Link></div>
        <div className="buttons">
          {
            userData?.admin_name || userData?.SName ? 
            <>

              <Avatar style={{border: "3px solid #0095A9", borderRadius: "50%", height: "50px" , width : "50px", padding: "0.5rem"}} size='md' name={userData?.SName || userData?.admin_name} />
              <button className="logout btn" onClick={() => (handleLogout())}>Logout</button> 
            </>
            :
            <>
              <button className="signin btn"><Link to="/signin" style={{color: 'inherit', textDecoration: 'none' }}>Sign in</Link></button>
              <button className="signup btn"><Link to="/signup" style={{color: 'inherit', textDecoration: 'none' }}>Sign up</Link></button> 
            </>
          }
        </div>
    </div>
  )
}

export default Navbar