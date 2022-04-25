import db from "../database/conn.js";

export const addStudent = async(req,res) => {   
    try {
        const sql = `INSERT INTO student VALUES ("${req.body.enrolment}", "${req.body.password}", "${req.body.email}", "${req.body.name}", ${req.body.sem}, ${req.body.cg}, "${req.body.course}", ${req.body.mobile}, "${req.body.gender}", "${req.body.file}")`;  
        db.query(sql,(error,result) => {
            if(error)
            return res.status(422).json(error.sqlMessage);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message:"Server Error",error});
    }
}

export const getAllStudent = async(req,res) => {
    try {
        const sql = "SELECT * from student";
        db.query(sql,(error,result) => {
            if(error)
                return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message:"Server Error",error});
    }
}

export const getStudent = async (req,res) => {
    try {
        const sql = `select * from student where Enrol_num = "${req.body.enrol}"`
        db.query(sql,(error,result) => {
            if(error || !result || result[0] === null)
                return res.status(422).json(error);
            
            if(req.body.password === result[0]?.Pasword)
                return res.status(200).json(result);
            return res.status(200).json({message:"Invalid Credential"});
        })
    } catch (error) {
        res.status(500).json({message:"Server Error",error});
    }
}

export const updateStudent = async (req , res) => {
    try {
        // console.log(req.body)
        const sql = `Update student set Pasword="${req.body.Pasword}" ,Email="${req.body.Email}",SName="${req.body.SName}",Cur_sem=${req.body.Cur_sem},Cgpa=${req.body.Cgpa},Course="${req.body.Course}",Mobile=${req.body.Mobile},Gender="${req.body.Gender}" ,S_resume="${req.body.S_resume}"  where Enrol_num = "${req.body.Enrol_num}"`;
        db.query(sql, (error, result) => {
          if (error) return res.status(422).json(error);
          res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

export const deleteStudent = async (req , res) => {
    try {
        // console.log(req.body);
        const sql = `DELETE FROM student where Enrol_num = "${req.body.Enrol_num}"`;
        db.query(sql, (error, result) => {
          if (error) return res.status(422).json(error);
          res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}