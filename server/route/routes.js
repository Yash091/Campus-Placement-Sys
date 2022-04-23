import express,{Router} from "express";
import { getAllStudent, addStudent, getStudent , updateStudent} from "../controller/studentcontroller.js";
import { addCompany, deleteCompany, getAllCompany, updateCompany, getCompany } from "../controller/companycontroller.js";
import { addJob, getAllJob, deleteJob, updateJob, getJob } from "../controller/jobcontroller.js";
import { updateAdmin , getAdmin } from "../controller/admincontroller.js";
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hey man");
})

//////////////////////////////////////////////////////////////////////
//Admin
router.post("/loginadmin",getAdmin);
router.post("/updateadmin",updateAdmin);

//////////////////////////////////////////////////////////////////////
//Student
router.post("/addstudent",addStudent);
router.get("/getallstudent",getAllStudent);
router.post("/updatestudent",updateStudent);
router.post("/getstudent",getStudent);

//////////////////////////////////////////////////////////////////////
//Company
router.post("/addcompany",addCompany);
router.get("/getallcompany", getAllCompany);
router.get("/getcompany/:id",getCompany);
router.post("/updatecompany", updateCompany);
router.post("/deletecompany", deleteCompany);

/////////////////////////////////////////////////////////////////////
//Job
router.post("/addjob",addJob);
router.get("/getalljob",getAllJob);
router.get("/getjob/:id",getJob);
router.post("/deletejob", deleteJob);
router.post("/updatejob", updateJob);

export default router;