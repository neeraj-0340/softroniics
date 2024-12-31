import express from "express";
import AuthRouter from "./AuthRouter/AuthRouter.js";
const app = express()

app.use("/auth",AuthRouter);

app.listen(5000, ()=>{
    console.log("server running on 5000");
})