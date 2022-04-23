import {React , useState , useEffect, useContext} from 'react';
import "./ViewJobs.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteJob, getAllJob, updateJob } from "../../../services/Api";
import { AppContext } from "../../../context/Context";
import Navbar from '../../Navbar/Navbar';
import Apply from "../../../images/apply.png";
import { Link } from 'react-router-dom';

const ViewJobs = () => {

    const { userData, setUserData } = useContext(AppContext);

    const [job , setJob] = useState([]);
    useEffect(() => {
      const viewJob = async () => {
        const data = await getAllJob();
        if(data)
            setJob(data.data);
      }
      viewJob();
    }, []);
    // console.log(job);
    const handleDelete = async (id) => {
        const data = await deleteJob(id);
    }

    const handleApply = async (id) => {
        // const data = await 
        console.log(id);
    }

    const handleUpdate = async (id) => {
      const data = await updateJob(id);
      window.location.reload();
    }

    return (
      <>
        <Navbar />
        <div className="jobs-container">
          <div className="heading">Job Details</div>
          <Paper className="container">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell numeric>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Salary</TableCell>
                  {userData?.admin_name ? <TableCell>UPDATE</TableCell> : ""}
                  {userData?.admin_name ? <TableCell>DELETE</TableCell> : ""}
                  {userData?.SName ? <TableCell>APPLY</TableCell> : ""}
                </TableRow>
              </TableHead>
              <TableBody>
                {job?.map((job) => (
                  <TableRow key={job.Job_id}>
                    {/* <TableCell numeric>{job.Job_id}</TableCell> */}
                    <TableCell numeric>{job.Job_Name}</TableCell>
                    <TableCell numeric>{job.Job_Desc}</TableCell>
                    <TableCell numeric>{job.Com_Name}</TableCell>
                    <TableCell numeric>{job.Job_salary}</TableCell>
                    {userData?.admin_name ? <TableCell onClick={() => handleUpdate(job.Job_id)}><Link to={`/jobUpdate/${job.Job_id}`}><img style={{height: "2rem" , width: "2rem" , cursor: "pointer"}} src="https://img.icons8.com/fluency/48/000000/approve-and-update.png" /></Link></TableCell> : ""}
                    {userData?.admin_name ? <TableCell onClick={() => handleDelete(job.Job_id)}><img style={{ height: "2rem", width: "2rem", cursor: "pointer"}} src="https://img.icons8.com/fluency/48/000000/delete-trash.png" /></TableCell> : ""}
                    {userData?.SName ? <TableCell onClick={() => handleApply(job.Job_id)}><img src={Apply} style={{ height: "3rem", width: "3rem", cursor: "pointer"}}/></TableCell> : ""}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          {
            userData?.admin_name ? 
                    <Link to="/jobadd" style={{color: 'inherit', textDecoration: 'none' }}>
                        <div className="add-record" style={{display: "flex" , color: "white" , fontSize: "1.5rem" , margin: "2rem 1rem"}}>
                            + Add a record
                        </div>
                    </Link> : ""
          }
        </div>
      </>
    );
}

export default ViewJobs