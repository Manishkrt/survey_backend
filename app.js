import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import './connection/connection.js'
import surveyroute from './routes/survey.js'  

dotenv.config(); 

const PORT = process.env.PORT;  
const app = express();
 
// middle ware 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 

// routes 

app.use('/',  surveyroute) 

  
// server port 
app.listen(PORT, (req, res)=>{
    console.log("server is started on port " + PORT); 
});