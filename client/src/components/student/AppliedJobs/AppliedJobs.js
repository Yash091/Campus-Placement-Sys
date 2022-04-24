import {React , useEffect , useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./AppliedJobs.css"
import Navbar from "../../Navbar/Navbar";
import { useParams } from 'react-router-dom';
import { viewApplyJob } from '../../../services/Api';

const AppliedJobs = () => {

    const [data,setData]= useState([]);
    const {id} = useParams();
    
    useEffect(()=>{
        const getData = async () => {
            const jobs = await viewApplyJob(id);
            setData(jobs?.data);
        }
        getData();
    },[]);

    return (
        <>
          <Navbar />
          <div className="applied-jobs-container">
            <div className="heading">Jobs Applied</div>
            <Paper className="container">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Job Name</TableCell>
                    <TableCell>Company Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((job) => (
                    <TableRow key={job.pid}>
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

export default AppliedJobs