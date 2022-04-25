import {React , useState , useContext} from 'react'
import AppContext from "../../../context/Context.js"
import { adminUpdate } from '../../../services/Api';
import filePic from "../../../images/file.png"
import "./adminupdate.css"
import { useNavigate } from 'react-router-dom';
import App from '../../../App.js';
import Navbar from "../../Navbar/Navbar";

const AdminUpdate = () => {

    const navigate = useNavigate();
    // const {userData,setUserData} = useContext(AppContext);
     const initial = JSON.parse(window.localStorage.getItem("user"));
     const [admin,setAdmin] = useState(initial);
    const handleUpdateProfile = async () => {
        if(!admin.admin_pass){
            window.alert("Fill the password!");
            return;
        }
        
        const data = await adminUpdate(admin);
       
        if(data.data) {
            window.localStorage.setItem("user",JSON.stringify(admin));
            window.alert("Password updated!!");
            navigate("/admin");
        }
    }

    return (
        <>
            <Navbar />
            <div className="profile-container">
                <div className="heading">
                        Update Profile
                </div>
                <div className="form">
                    <div >
                        <label htmlFor='admin-pass'>Password : </label>
                        <input id="admin-pass" type = "text" value={admin.admin_pass} onChange={(e)=>setAdmin({...admin , admin_pass:e.target.value})}/>
                    </div>
                </div>
                <button className="signup-btn" onClick={(e) => (handleUpdateProfile(e))}>Update</button>
            </div>
        </>
    )
}

export default AdminUpdate;