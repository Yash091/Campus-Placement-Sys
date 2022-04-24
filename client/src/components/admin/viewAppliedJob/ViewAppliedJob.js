import {React , useEffect , useState,useContext} from 'react'
import "./ViewAppliedJob.css"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../../Navbar/Navbar";
import { getAllAppliedJob } from '../../../services/Api';
import { AppContext } from '../../../context/Context';

const ViewAppliedJob = () => {

    const [data , setData] = useState([]);
    const {userData} = useContext(AppContext)
    useEffect(() => {
        const getAppliedJobs = async () => {
          const jobs = await getAllAppliedJob();
          console.log(jobs);
          if(jobs) {
            setData(jobs.data);  
            console.log(data);
          }
        }
        getAppliedJobs();
      }, []);
    
    return (
        <>
          <Navbar />
          <div className="view-applied-container">
            <div className="heading">Jobs Applied By Students</div>
            <Paper className="container">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell numeric>Student Enrolment Number</TableCell>
                    <TableCell>Student Name</TableCell>
                    <TableCell>Job Name</TableCell>
                    <TableCell>Company Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((job) => (
                    <TableRow key={job.pid}>
                      <TableCell numeric>{job.Enrol_num}</TableCell>
                      <TableCell numeric>{job.Sname}</TableCell>
                      <TableCell numeric>{job.Job_Name}</TableCell>
                      <TableCell numeric>{job.Com_Name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        </>
      );
}

export default ViewAppliedJob