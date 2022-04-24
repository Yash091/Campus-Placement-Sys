import React, { useContext } from 'react'
import ViewJob from "../../../images/viewjob.png"
import ViewCompanies from "../../../images/viewcompanies.png"
import JobsApplied from "../../../images/jobsapplied.png"
import UpdateProfile from "../../../images/update.png"
import Navbar from '../../Navbar/Navbar'
import "./StudentLandingPage.css"
import { Link } from "react-router-dom";
import { AppContext } from '../../../context/Context'

const StudentLandingPage = () => { 

  const {userData} = useContext(AppContext)

  return (
      <>
        <Navbar />
        <div className='std-land-page'>
            <Link to="/viewjobs"><img src={ViewJob}/></Link>
            <Link to="/viewcompanies"><img src={ViewCompanies}/></Link>
            <Link to={`/appliedjobs/${userData.Enrol_num}`}><img src={JobsApplied}/></Link>
            <Link to="/updateprofile"><img src={UpdateProfile}/></Link>
        </div>
      </>
  )
}

export default StudentLandingPage;