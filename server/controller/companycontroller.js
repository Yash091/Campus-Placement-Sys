import db from "../database/conn.js";

export const addCompany = async (req,res) => {
    try {
        const sql = `INSERT INTO company VALUES ("${req.body.name}", "${req.body.type}", "${req.body.desc}")`;  
        db.query(sql,(error,result) => {
            if(error)
                return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message:"Server error",error})
    }
}

export const getAllCompany = async(req,res) => {
    try {
        const sql = "Select * from company";
        db.query(sql,(error,result)=>{
            if(error)
                return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message : "Server error", error})
    }
}

export const getCompany = async (req , res) => {
    try {
        const sql = `Select * from company where Com_Name = "${req.params.id}"`;
        db.query(sql, (error, result) => {
            if (error)
                return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message : "Server error", error})
    }
}

export const updateCompany = async (req , res) => {
    try {
        const sql = `Update company set Com_Type = "${req.body.Com_Type}" , Com_Desc = "${req.body.com_desc}" where Com_Name = "${req.body.Com_Name}" `;
        db.query(sql,(error,result)=>{
            if(error)
                return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message:"Server error",error});
    }
}

export const deleteCompany = async (req , res) => {
    try {
        // console.log(req.body);
        const sql = `Delete from company where Com_Name = "${req.body.name}"`;
        db.query(sql,(error,result)=>{
            if(error)
                console.log(error);
                // return res.status(422).json(error);
            res.status(200).json(result);
        })
    } catch (error) {
        res.status(500).json({message:"Server error",error});
    }
}