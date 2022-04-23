import {React , useState} from 'react'
import "./Signin.css"
import { useNavigate } from 'react-router-dom'
import signin from "../../../images/signin.png"
import { loginAdmin, loginStudent } from '../../../services/Api'

const Signin = () => {

    const navigate = useNavigate();
    const initial = {
        enrol: "admin",
        password: "",
        designation: "",
    }
    const [data , setData] = useState(initial);

    const handleChange = (e) => {
        setData({...data , [e.target.name]: e.target.value});
    }

    const handleLogin = async() => {
        if(data.designation === "admin"){
            const user = await loginAdmin(data);
            
            // console.log(user);
            if(user.data.message)
            window.alert(user.data.message);
            else{
                window.localStorage.setItem("user",JSON.stringify(user.data[0]));
             
                navigate("/admin");
            }
        }
        else{
            const user = await loginStudent(data);
           
            if(user.data.message)
                window.alert(user.data.message);
            else{
                window.localStorage.setItem("user",JSON.stringify(user.data[0]));
                
                navigate("/student");
            }
        }
    }

    return (
        <div className='signin-container'>
            <div className='left'>
            <img className="sign-in" src = {signin} alt = "signin"/>
            </div>
            <div className='right'>
                <div className='log-head'>Sign In</div>
                <div className='inputs'>
                    <div className='rad-input'>
                        <div className='rad-btn'>
                            <input type="radio" name='designation' value="Admin" onClick={() => (setData({...data , designation: "admin"}))}/>
                            <div className='rad-label' >Admin</div>
                        </div>
                        <div className='rad-btn'>
                            <input type="radio" name="designation" value="Student" onClick={() => (setData({...data , designation: "student"}))}/>
                            <div className='rad-label'>Student</div>
                        </div>
                    </div>
                    <div className={`input-area ${data.designation === "admin" ? "hidden" : ""}`}>
                        <div className={`input-label ${data.designation === "admin" ? "hidden" : ""}`}>Enrolment Number</div>
                        <input className={`input-field ${data.designation === "admin" ? "hidden" : ""}`} type="text" name="enrol" onChange={(e) => (handleChange(e))}/>
                    </div>
                    <div className='input-area'>
                        <div className='input-label'>Password</div>
                        <input className='input-field' type="password" name="password" onChange={(e) => (handleChange(e))}/>
                    </div>
                </div>
                <div className='signin-btn' onClick={handleLogin}>
                    <button>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Signin