import express from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
import 'dotenv/config'
const app = express()

app.use("/auth",AuthRouter);

const port=process.env.PORT || 5001

app.listen(port, ()=>{
    console.log("server running on",port);
})