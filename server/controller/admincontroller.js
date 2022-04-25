import db from "../database/conn.js";

export const getAdmin = async (req , res) => {
    try {
        const sql = `Select * from officer where aid="1"`;
        db.query(sql, (error, result) => {
          if (error) return res.status(422).json(error);

          if(req.body.password === result[0].admin_pass)
            return res.status(200).json(result);
            
           return res.status(200).json({ message: "Invalid Credentials"});
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

export const updateAdmin = async (req , res) => {
    try {
        
        const sql = `Update officer set admin_pass="${req.body.admin_pass}" where aid = "1"`;
        db.query(sql, (error, result) => {
          if (error) return res.status(422).json(error);
          res.status(200).json(result);
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}