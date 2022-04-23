import React from 'react'
import "./Home.css"
import Homepic from "../../images/homepic.png"
import { Link } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {

  return (
    <div className="home-container">
      {/* <div className="top-bar">
        <div className="name">Cam<span>Rec</span></div>
        <div className="buttons">
          <button className="signin btn"><Link to="/signin" style={{color: 'inherit', textDecoration: 'none' }}>Sign in</Link></button>
          <button className="signup btn"><Link to="/signup" style={{color: 'inherit', textDecoration: 'none' }}>Sign up</Link></button>
        </div>
      </div> */}
      <Navbar />
      <div className="main">
        <div className="left">
          <div className="heading">
            Campus Placement <span>System</span>
          </div>
          <div className="text">
          Campus Placement system is the project which is beneficial for college students, various companies visiting the campus for recruitment and even the college placement admin. The system allows the students to create their profiles and upload all their details including their marks onto the system and can apply for jobs which admin has updated.
          </div>
        </div>
        <div className="right">
          <img className="home-pic" src = {Homepic} alt = "homepic"/>
        </div>
      </div>
    </div>
  );
}

export default Home