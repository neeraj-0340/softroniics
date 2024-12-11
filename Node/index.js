import express from "express";
import { connectDB } from "./dblink/link.js";
import userRouter from "./routes/userRouter.js";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())


connectDB()
app.use('/user', userRouter);


app.listen(8002
    , () => {
    console.log("running");
})