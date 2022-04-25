import {React , useState} from 'react'
import "./JobAdd.css"
import Navbar from '../../Navbar/Navbar'
import { addJob } from '../../../services/Api'
import { useNavigate } from 'react-router-dom'

const JobAdd = () => {

  const navigate = useNavigate();
  const initial = {
    name: "",
    cname: "",
    salary: "",
    desc: "",
  };
  const [data , setData] = useState(initial);

  const handleChange = (e) => {
    setData({...data , [e.target.name]: e.target.value});
  }

  const handleJobAdd = async () =>{
    
    const job = await addJob(data);
    
    if (!job?.data){window.alert("Kindly Check the Company Name!!");}
    else
      navigate("/viewjobs");
  }

  return (
    <>
      <Navbar />
      <div className='job-add-container'>
          <div className='heading'>
              Add New Job
          </div>

          <div className ='container'>
            <div className = 'left'>
              <div className="job name">
                <input type="text" name="name" placeholder="Job Name" onChange={(e) => (handleChange(e))}/>
              </div>

              <div className="job desc">
                <input type="text" name="desc" placeholder="Job Description" onChange={(e) => (handleChange(e))}/>
              </div>
            </div>

            <div className = 'right'>
              <div className="company name">
                <input type="text" name="cname" placeholder="Company Name" onChange={(e) => handleChange(e)}/>
              </div>

              <div className="job salary">
                <input type="number" name="salary" placeholder="Job Salary" onChange={(e) => (handleChange(e))}/>
              </div>
            </div>
          </div>

          <button className="add-btn" onClick={handleJobAdd}>Add</button>
      </div>
    </>
  )
  
}

export default JobAdd