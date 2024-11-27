import express from "express";
import { connectDB } from "./dblink/link.js";

const app=express()
app.use(express.json())


connectDB();


app.listen(8000,()=>{console.log("running");
})