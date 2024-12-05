import user from "../model/user"



const add=async(req,res)=>{
    let newadmin =new user(req.body)
    let response =await newadmin.save()
    res.json(response)
    console.log(response);
    
}

export { add }