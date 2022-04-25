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
import { getAllStudent, deleteStudent } from "../../../services/Api";
import Navbar from "../../Navbar/Navbar";

const ViewStudents = () => {

  const [data , setData] = useState([]);
  useEffect(() => {
    const getStudent = async () => {
      const stud = await getAllStudent();
 
      if(stud) {
        setData(stud.data);  
      
      }
    }
    getStudent();
  }, []);
  
  const handleDelete = async (student) => {
    const stud = await deleteStudent(student);
    if(stud) {
     
      window.location.reload();
    }
  }

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
                <TableCell>DELETE</TableCell>
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
                    <TableCell onClick={()=>handleDelete(student)}><img style={{ height: "2rem", width: "2rem", cursor: "pointer"}} src="https://img.icons8.com/fluency/48/000000/delete-trash.png" /></TableCell>
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