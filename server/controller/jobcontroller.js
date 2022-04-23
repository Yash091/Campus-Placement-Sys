import db from "../database/conn.js";

export const addJob = async (req, res) => {
    try {
        console.log(req.body);
        const sql = `INSERT INTO job(Job_Name,Job_Desc,Job_salary,Com_Name ) VALUES ("${req.body.name}", "${req.body.desc}" , ${Number(req.body.salary)},"${req.body.cname}")`;
        db.query(sql,(error,result) => {
            if(error)
               return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message:"Server error",error})
    }
}

export const getAllJob = async(req,res) => {
    try {
        const sql = "Select * from job";
        db.query(sql,(error,result)=>{
            if(error)
                return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message : "Server error", error})
    }
}

export const getJob = async (req , res) => {
    try {
        const sql = `select * from job where Job_id="${req.params.id}"`;
        db.query(sql,(error,result)=>{
            if(error)
                return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message : "Server error", error})
    }
}

export const updateJob = async(req,res) => {
    try{
        const sql = `Update job set Job_Desc = "${req.body.Job_Desc}" , Job_Name = "${req.body.Job_Name}" ,Job_salary = ${req.body.Job_salary}, Com_Name= "${req.body.Com_Name}" where Job_id= "${req.body.Job_id}" `;
        db.query(sql,(error,result)=>{
            if(error)
                return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message : "Server error", error});
    }
}

export const deleteJob = async(req,res) => {
    try{
        
        const sql = `Delete from job where Job_id = "${req.body.id}" `;
        db.query(sql,(error,result)=>{
            if(error)
                return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message : "Server error", error});
    }
}