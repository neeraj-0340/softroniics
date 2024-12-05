import { request } from "express";
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
const update = async (req, res) => {
    const id = req.params.id; // Fixed the typo
    console.log("Request Body:", req.body);
    console.log("ID:", id);

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    try {
        // Update the user and return the updated document
        const response = await user.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        
        if (!response) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(response);
    } catch (error) {
        console.error("Error during update:", error);
        res.status(500).json({ message: "Error updating user", error });
    }
};

export { add, view, update }