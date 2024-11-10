import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    department:String,
    mentor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Mentors"
    }
})  

const Students = mongoose.model("Students", studentSchema)

export default Students;