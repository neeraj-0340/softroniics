import express from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
import 'dotenv/config'
import { connectDB } from "./Utilis/db.js";
import cors from 'cors';

const app = express()

app.use(express.json());

app.use(cors())

app.use("/auth",AuthRouter);


const port=process.env.PORT || 5001

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log("server running on",port);
    })
})

