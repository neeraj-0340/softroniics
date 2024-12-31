import express from "express";
import { initial } from "../controller/Authcontroller.js";

const AuthRouter = express.Router()

AuthRouter.get("/initial",initial)

export default AuthRouter