import {React , useEffect , useState} from "react";
import "./ViewStudents.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import rows from "./dummy";
import { getAllStudent } from "../../../services/Api";
import Navbar from "../../Navbar/Navbar";

const ViewStudents = () => {

  const [data , setData] = useState([]);
  useEffect(() => {
    const getStudent = async () => {
      const stud = await getAllStudent();
      console.log(stud);
      if(stud) {
        setData(stud.data);  
        console.log(data);
      }
    }
    getStudent();
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="students-container">
        <div className="heading">Student Details</div>
        <Paper className="container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell numeric>Enrolment Number</TableCell>
                <TableCell >Name</TableCell>
                <TableCell >Gender</TableCell>
                <TableCell >Course</TableCell>
                <TableCell >Current Semester</TableCell>
                <TableCell >Current CGPA</TableCell>
                <TableCell numeric>Mobile</TableCell>
                <TableCell >Email ID</TableCell>
                <TableCell >Resume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.map((student) => (
                  <TableRow key={student.Enrol_num}>
                    <TableCell numeric>{student.Enrol_num}</TableCell>
                    <TableCell numeric>{student.SName}</TableCell>
                    <TableCell numeric>{student.Gender}</TableCell>
                    <TableCell numeric>{student.Course}</TableCell>
                    <TableCell numeric>{student.Cur_sem}</TableCell>
                    <TableCell numeric>{student.Cgpa}</TableCell>
                    <TableCell numeric>{student.Mobile}</TableCell>
                    <TableCell numeric>{student.Email}</TableCell>
                    <TableCell numeric>{student.S_resume}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    </>
  );
};

export default ViewStudents;
