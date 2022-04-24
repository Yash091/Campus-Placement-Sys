import React, { useContext, useEffect } from 'react'
import "./Home.css"
import Homepic from "../../images/homepic.png"
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import { AppContext } from '../../context/Context';

const Home = () => {

  const {userData} = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(userData?.admin_name)
      navigate("/admin");
    else if(userData?.SName)
      navigate("/student");
  },[])

  return (
    <div className="home-container">
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