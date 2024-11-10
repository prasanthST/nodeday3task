import mongoose  from "mongoose"

const mentorSchema = mongoose.Schema({
    firstName:String,
    LastName:String,
    email:String,
    studentId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Students"
    }]
})
const Mentors = mongoose.model("Mentors", mentorSchema)
export default Mentors;