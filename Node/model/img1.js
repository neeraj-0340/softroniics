import mongoose from "mongoose";

const imgschema = new mongoose.Schema({
    image: {
        type:String,
        required: true
    },
});

const img1 = mongoose.model("img1",imgschema);
export default img1