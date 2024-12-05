import express from "express";
import { connectDB } from "./dblink/link.js";
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json());


connectDB()
app.use('/user', userRouter);


app.listen(8000, () => {
    console.log("running");
})