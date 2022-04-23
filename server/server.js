import express from "express" 
import db from "./database/conn.js"
import router from "./route/routes.js";
import bodyParser from "body-parser";
import cors from "cors";
const PORT = 8000;

const app = express();
app.use(cors({
  origin : ["http://localhost:3000"],
  credentials:true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/",router);

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(PORT,() => {
    console.log(`Connected to port ${PORT}`)
})