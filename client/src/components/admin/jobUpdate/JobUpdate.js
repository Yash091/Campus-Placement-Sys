import {React , useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./JobUpdate.css"
import Navbar from '../../Navbar/Navbar'
import { getJob, updateJob } from '../../../services/Api'
import { useNavigate } from 'react-router-dom';

const JobUpdate = () => {
    
    const navigate = useNavigate();
    const {id} = useParams();
    const initial = {
      name: "",
      cname: "",
      salary: "",
      desc: "",
    };
    const [data , setData] = useState(initial);

    useEffect(()=>{
      const getJ = async () => {
          const Jb = await getJob(id);
          console.log(Jb);
          setData(Jb.data[0]);
      }
      getJ();
  },[])


  const handleChange = (e) => {
    setData({...data , [e.target.name]: e.target.value});
  }

  const handleJobUpdate = async () =>{
    const job = await updateJob(data);
    console.log(job);
    if(job)
    navigate("/viewjobs");
  }

  return (
    <>
      <Navbar />
      <div className='job-update-container'>
          <div className='heading'>
              Update Job
          </div>

          <div className ='container'>
            <div className = 'left'>
              <div className="job name">
                <input type="text" name="Job_Name" placeholder="Job Name" value={data.Job_Name} onChange={(e) => (handleChange(e))}/>
              </div>
              <div className="job desc">
                <input type="text" name="desc" placeholder="Job Description" value={data.Job_Desc} onChange={(e) => (handleChange(e))}/>
              </div>
            </div>
            <div className = 'right'>
              <div className="compnay name">
                <input type="text" name="Com_Name" value={data.Com_Name} placeholder="Company Name" onChange={(e) => (handleChange(e))}/>
              </div>
              <div className="job salary">
                <input type="text" name="Job_salary" value={data.Job_salary} placeholder="Job Salary" onChange={(e) => (handleChange(e))}/>
              </div>
            </div>
          </div>
          <button className="update-btn" onClick={handleJobUpdate}>Update</button>

      </div>
    </>
  )
  
}

export default JobUpdate;