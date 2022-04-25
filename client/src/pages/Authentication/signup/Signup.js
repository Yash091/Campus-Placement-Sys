import { React , useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import filePic from "../../../images/file.png";
import { addStudent } from '../../../services/Api';

const Signup = () => {

    const navigate = useNavigate();
    const initial = {
        name: "",
        email: "",
        password: "",
        enrolment: "",
        sem: "",
        cg: "",
        course: "",
        mobile: "",
        gender: "",
        file: "",
    };
    const [user , setUser] = useState(initial);
    const handleChange = (e) => {
        e.preventDefault();
        setUser({...user , [e.target.name]: e.target.value});
    }
 
    
    const handleSignup = async (e) => {
        // console.log(user);
        const data = await addStudent(user);

        if(!data.data)
            window.alert("Fill the fields properly or enrolment id already exists!")
        if(data)
            navigate("/signin")
    }

  return (
    <div className="signup-container">
        <div className="heading">
            Sign Up
        </div>
        <div className="form">
            <div className="first">
                <div className="common name">
                    <input type="text" name="name" placeholder="Full Name" onChange={(e) => {handleChange(e)}}/>
                </div>
                <div className="common password">
                    <input type="password" name="password" placeholder="Password" onChange={(e) => {handleChange(e)}}/>
                </div>
                <div className="common sem">
                    <input type="text" name="sem" placeholder="Current Semester" onChange={(e) => {handleChange(e)}}/>
                </div>
                <div className="common course">
                    <input type="text" name="course" placeholder="Course(IT/ECE)" onChange={(e) => {handleChange(e)}}/>
                </div>
                <div className="gender">
                    <div className="male">
                        <input type="radio" id="gender" name="gender" value="male" onClick={() => (setUser({...user , gender:"male"}))}/>
                        <label htmlFor="age1">Male</label>
                    </div>
                    <div className="female">
                        <input type="radio" id="gender" name="gender" value="female" onClick={() => (setUser({...user , gender:"female"}))}/>
                        <label htmlFor="age2">Female</label>  
                    </div>
                </div>
            </div>
            <div className="second">
                <div className="email">
                    <input className="com" type="email" name="email" placeholder="Email-id" onChange={(e) => {handleChange(e)}}/>
                </div>
                <div className="enrolment-number">
                    <input className="com" type="text" name="enrolment" placeholder="Enrolment Number" onChange={(e) => {handleChange(e)}}/>
                </div>
                <div className="cg">
                    <input className="com" type="Number" name="cg" placeholder="Cumulative CG" onChange={(e) => {handleChange(e)}}/>
                </div>
                <div className="mobile">
                    <input className="com" type="tel" name="mobile" placeholder="Mobile Number" onChange={(e) => {handleChange(e)}}/>
                </div>
                <div className="file">
                    <label className="file-resume" htmlFor="file">
                        Upload Resume :
                        <img src={filePic} />
                        Choose a file
                    </label>
                    <input id="file" type="file" accept=".pdf" name="file" placeholder="" onChange={(e) => {handleChange(e)}}/>
                </div>
            </div>
        </div>
        <button className="signup-btn" onClick={(e) => (handleSignup(e))}>Sign Up</button>
    </div>
  )
}

export default Signup;