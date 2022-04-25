import React from 'react'
import ViewStudent from "../../../images/viewstudent.png";
import ViewJob from "../../../images/viewjob.png"
import ViewCompanies from "../../../images/viewcompanies.png";
import JobsAppliedByStudent from "../../../images/jobappliedbystudent.png";
import UpdateProfile from "../../../images/update.png";
import Navbar from "../../Navbar/Navbar";
import "./AdminLandingPage.css";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const AdminLandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
        <Navbar />
        <div className='ad-land-page'>
            <Link to="/viewstudents"><img src={ViewStudent} onClick={()=>{navigate("/viewstudents")}}/></Link>
            <Link to="/viewjobs"><img src={ViewJob} onClick={()=>{navigate("/viewjobs")}}/></Link>
            <Link to="/viewcompanies"><img src={ViewCompanies} onClick={()=>{navigate("/viewcompanies")}}/></Link>
            <Link to="/viewappliedjobs"><img src={JobsAppliedByStudent}/></Link>
            <Link to="/adminupdate"><img src={UpdateProfile} /></Link>
        </div>
      </>
  )
}

export default AdminLandingPage