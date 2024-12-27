import express from 'express'
import { add, addimage, deletedata, login, logindetails, update, view } from '../controllers/usercontroller.js'
import { upload } from '../multer.js';


const userRouter = express.Router()

userRouter.post("/add", add);
userRouter.get("/view", view);
userRouter.delete("/delete/:id", deletedata);
userRouter.put("/update/:id", update);
userRouter.post("/login", login);
userRouter.get("/logindetails/:id", logindetails);
userRouter.post("/addimage", upload.single("image"), addimage);




export default userRouter;