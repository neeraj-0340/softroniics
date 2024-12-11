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
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        let user = await user.findOne({ email: email });

        // Check if user exists
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        // Check if password matches
        if (user.password === password) {
            console.log("Login successful");
            return res.json(user);  // Send the user details as the response
        } else {
            console.log("Invalid password");
            return res.status(401).json({ message: "Invalid password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "An error occurred during login" });
    }
};


export { add, view, update,deletedata,login }