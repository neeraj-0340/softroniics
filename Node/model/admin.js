import mongoose from "mongoose";

let adminschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
})

const admin=mongoose.model.apply("admin",adminschema);
export default admin