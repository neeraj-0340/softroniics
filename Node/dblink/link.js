import  mongoose  from "mongoose";
export const connectDB=async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));
}