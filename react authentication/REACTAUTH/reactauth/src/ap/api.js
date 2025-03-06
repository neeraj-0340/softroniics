import axios from 'axios';

const url="http://localhost:5000";

export const loginApi=async(data)=>{
    try {
        const res=await axios.post(`${url}/auth/login`,data)
        return res
    } catch (error) {
        return error
    }
}