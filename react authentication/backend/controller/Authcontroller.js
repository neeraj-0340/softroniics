
export async function initial(req,res) {
    res.send("welcomeeeee")
}
let users
export async function register(req,res) {
    try {
        let {name,email,password}=req.body;
        if (name || email|| password) {
            return res.status(400).json({message:"data not found"})
        }
        let hashepassword = await bcrypt.hash(password,10)
    } catch (error) {
        console.error(error);
        
    }
}