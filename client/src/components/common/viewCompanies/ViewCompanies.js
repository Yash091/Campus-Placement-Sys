import { React, useContext, useEffect, useState } from "react";
import "./ViewCompanies.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { deleteCompany, getAllCompanies, updateCompany, getCompany } from "../../../services/Api";
import Navbar from "../../Navbar/Navbar";
import { AppContext } from "../../../context/Context";
import { Link } from "react-router-dom";

const ViewCompanies = () => {

    const {userData , setUserData} = useContext(AppContext);

    const [data , setData] = useState([]);
    useEffect(() => {
        const allCompanies = async () => {
            const companies = await getAllCompanies();
            if(companies) {
                setData(companies.data);
                
            }
        }
        allCompanies();
    }, []);
    
    const handleUpdate = async (com) => {
        const company = await updateCompany(com);
    }
    
    const handleDelete = async (com) => {
        const info = await deleteCompany({name : com.Com_Name});
        window.location.reload();
    }
    
  return (
    <>
        <Navbar />
        <div className="companies-container">
            <div className="heading">Company Details</div>
            <Paper className="container">
                <Table>
                <TableHead>
                    <TableRow>
                        <TableCell numeric>Company Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Description</TableCell>
                        {
                            userData?.admin_name ? <TableCell>UPDATE</TableCell> : ""
                        }
                        {
                            userData?.admin_name ? <TableCell>DELETE</TableCell> : ""
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((company) => (
                            <TableRow key={company.Com_Name}>
                                <TableCell numeric>{company.Com_Name}</TableCell>
                                <TableCell numeric>{company.Com_Type}</TableCell>
                                <TableCell numeric>{company.com_desc}</TableCell>
                                {
                                    userData?.admin_name ? <TableCell onClick={() => handleUpdate(company)}><Link to={`/companyUpdate/${company.Com_Name}`}><img style={{height: "2rem" , width: "2rem" , cursor: "pointer"}} src="https://img.icons8.com/fluency/48/000000/approve-and-update.png" /></Link></TableCell> : ""
                                }
                                {
                                    userData?.admin_name ? <TableCell onClick={() => handleDelete(company)}><img style={{ height: "2rem", width: "2rem", cursor: "pointer"}} src="https://img.icons8.com/fluency/48/000000/delete-trash.png" /></TableCell> : ""
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
                </Table>
            </Paper>
            {
                userData?.admin_name ? 
                    <Link to="/companyadd" style={{color: 'inherit', textDecoration: 'none' }}>
                        <div className="add-record" style={{display: "flex" , color: "white" , fontSize: "1.5rem" , margin: "2rem 1rem"}}>
                            + Add a record
                        </div>
                    </Link> : ""
            }
        </div>
    </>
  );
}

export default ViewCompanies