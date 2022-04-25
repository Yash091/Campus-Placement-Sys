import {React , useState , useContext} from 'react'
import AppContext from "../../../context/Context.js"
import { updateStudent } from '../../../services/Api';
import filePic from "../../../images/file.png"
import "./UpdateProfile.css"
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Navbar/Navbar";

const UpdateProfile = () => {
    
    const navigate = useNavigate();
    const user = JSON.parse(window.localStorage.getItem("user"));
    const [data , setData] = useState(user);

    const handleChange = (e) => {
        setData({...user , [e.target.name]: e.target.value});
    }

    const handleUpdateProfile = async() => {
        const updated = await updateStudent(data);
        window.localStorage.setItem("user",JSON.stringify(data));
        if(updated)
            window.alert("Your Profile has been Updated!!");
            navigate("/student");
    }

  return (
      <>
        <Navbar />
        <div className="profile-container">
            <div className="heading">
                Update Profile
            </div>
            <div className="form">
                <div className="first">
                    <div className="common name">
                        <input type="text" name="SName" placeholder="Full Name" value={data.SName} onChange={(e) => (handleChange(e))} />
                    </div>
                    <div className="common password">
                        <input type="text" name="Pasword" placeholder="Password" value={data.Pasword} onChange={(e) => (handleChange(e))}/>
                    </div>
                    <div className="common sem">
                        <input type="text" name="Cur_sem" placeholder="Current Semester" value={data.Cur_sem} onChange={(e) => (handleChange(e))}/>
                    </div>
                    <div className="common course">
                        <input type="text" name="Course" placeholder="Course(IT/ECE)" value={data.Course} onChange={(e) => (handleChange(e))}/>
                    </div>
                    <div className="gender">
                        <input type="text" name="Gender" placeholder="Gender" value={data.Gender} onChange={(e) => (handleChange(e))}/>
                    </div>
                </div>
                <div className="second">
                    <div className="email">
                        <input className="com" type="email" name="Email" placeholder="Email" value={data.Email} onChange={(e) => (handleChange(e))}/>
                    </div>
                    <div className="enrolment-number">
                        <input className="com" type="text" name="Enrol_num" placeholder="Enrolment Number" readOnly value={data.Enrol_num} onChange={(e) => (handleChange(e))}/>
                    </div>
                    <div className="cg">
                        <input className="com" type="Number" name="Cgpa" placeholder="Cumulative CG" value={data.Cgpa} onChange={(e) => (handleChange(e))}/>
                    </div>
                    <div className="mobile">
                        <input className="com" type="tel" name="Mobile" placeholder="Mobile Number" value={data.Mobile} onChange={(e) => (handleChange(e))}/>
                    </div>
                    <div className="file">
                        <label className="file-resume" htmlFor="file">
                            <img src={filePic} />
                            Choose a file
                        </label>
                        <input id="file" type="file" accept=".pdf" name="S_resume" placeholder=""  onChange={(e) => (handleChange(e))}/>
                    </div>
                </div>
            </div>
            <button className="signup-btn" onClick={(e) => (handleUpdateProfile(e))}>Update Profile</button>
        </div>
      </>
  )
}

export default UpdateProfile