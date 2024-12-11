import express from 'express'
import { add, deletedata, login, update, view } from '../controllers/usercontroller.js'


const userRouter = express.Router()

userRouter.post("/add", add);
userRouter.get("/view", view);
userRouter.delete("/delete/:id", deletedata);
userRouter.put("/update/:id", update);
userRouter.post("/login", login);

export default userRouter