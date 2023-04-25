import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
dotenv.config();

const db_url = process.env.DB_URL;

 const dbConnect = mongoose.connect(`mongodb+srv://manish:manish@cluster0.l2er0tj.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("database connected ");
}).catch(err => console.log(err))

export default dbConnect;