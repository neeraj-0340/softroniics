import img1 from "../model/img1.js";
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
        let users = await user.findOne({ email: email });

        // Check if user exists
        if (!users) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the password matches
        if (password === users.password) {
            console.log("Login successful");
            return res.json(users); // Send the user details as the response
        } else {
            console.log("Invalid password");
            return res.status(401).json({ message: "Invalid password" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "An error occurred during login" });
    }
}

const logindetails = async (req,res) => {
    const id = req.params.id;
    try {
        if (!id) {
            return res.status(400).json({message: "ID is required"});
        }
        const userdetails =await user.findById(id);
        if (!userdetails) {
            return res.status(400).json({message: "User not found"});
        }
        res.json(userdetails);
    } catch (e) {
        console.error("Error fetching user details:", e);
      res.status(500).json({ message: "An error occurred while fetching user details" });
    }
}

const addimage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const imagepath = req.file.path; 
        console.log("Uploaded File Path:", imagepath);

        const newproduct = new img1({
            ...req.body,
            image: imagepath,
        });

        const saveproduct = await newproduct.save();
        res.status(201).json(saveproduct);
    } catch (e) {
        console.error("Error:", e.message);
        res.status(500).json({ error: e.message });
    }
};



export { add, view, update,deletedata,login,logindetails,addimage }