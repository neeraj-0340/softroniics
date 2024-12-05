import { response } from "express";
import user from "../model/user.js";



const add = async (req, res) => {
    let newuser = new user(req.body)
    let response = await newuser.save()
    res.json(response)
    console.log(response);


}
const view = async (req, res) => {
    let response = await user.find()
    res.json(response)
}
const update = async(req,res)=>{
    let id=req.params.id
    let response= await user.findByIdAndUpdate(id,req.body)
    res.json(response)
    
}
const deletedata =async(req,res)=>{
    let id = req.params.id
    let response= await user.findByIdAndDelete(id)
    res.json(response)
}



export { add, view, update,deletedata }