import React, { useContext } from 'react';
import "./App.css"
import { Navigate, Route,Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import Signup from './pages/Authentication/signup/Signup';
import Signin from './pages/Authentication/signin/Signin';
import StudentLandingPage from './components/student/student-landing-page/StudentLandingPage';
import AdminLandingPage from './components/admin/admin-landing-page/AdminLandingPage';
import ViewStudents from './components/admin/viewStudents/ViewStudents';
import JobUpdate from './components/admin/jobUpdate/JobUpdate';
import JobAdd from "./components/admin/jobAdd/JobAdd";
import ViewCompanies from "./components/common/viewCompanies/ViewCompanies"
import CompanyUpdate from "./components/admin/companyUpdate/CompanyUpdate"
import CompanyAdd from './components/admin/companyAdd/CompanyAdd';
import ViewJobs from './components/common/viewJobs/ViewJobs';
import UpdateProfile from './components/student/updateProfile/UpdateProfile';
import AppliedJobs from './components/student/AppliedJobs/AppliedJobs';
import ViewAppliedJob from './components/admin/viewAppliedJob/ViewAppliedJob';
import AdminUpdate from './components/admin/adminupdate/adminupdate';
import { AppContext } from './context/Context';

function App() {
  const {userData} = useContext(AppContext)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="student" element={userData?<StudentLandingPage />: <Navigate to="/"/>} />
        <Route path="admin" element={userData?<AdminLandingPage />: <Navigate to="/"/>} />
        <Route path="viewstudents" element={userData?<ViewStudents />: <Navigate to="/"/>} />
        <Route path="jobupdate/:id" element={userData?<JobUpdate/>: <Navigate to="/"/>} />
        <Route path="jobadd" element={userData?<JobAdd />: <Navigate to="/"/>} />
        <Route path="viewjobs" element={userData?<ViewJobs/>: <Navigate to="/"/>} />
        <Route path="viewcompanies" element={userData?<ViewCompanies/>: <Navigate to="/"/>} />
        <Route path="companyupdate/:id" element={userData?<CompanyUpdate/>: <Navigate to="/"/>} />
        <Route path="companyadd" element={userData?<CompanyAdd/>: <Navigate to="/"/>} />
        <Route path="updateprofile" element={userData?<UpdateProfile />: <Navigate to="/"/>} />
        <Route path="appliedjobs/:id" element={userData?<AppliedJobs />: <Navigate to="/"/>} />
        <Route path="viewappliedjobs" element={userData?<ViewAppliedJob />: <Navigate to="/"/>} />
        <Route path="adminupdate" element={userData?<AdminUpdate />: <Navigate to="/"/>} />
      </Routes>
    </>
  );
}

export default App;