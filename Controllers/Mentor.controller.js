import Students from "../Models/Student.schema.js";
import Mentors from "../Models/Mentor.schema.js";

export const createMentor =async (req , res )=>{
    try {
        const Mentor = new Mentors(req.body)
        await Mentor.save();
        res.status(200).json({message:"Mentor created", data:Mentor})
        
    } catch (error) {
        console.log(error);
        
    }
  
}
//all mentors 
export const allmentors = async (req, res)=>{
    try {
        const allmentors = await Mentors.find()
        res.status(200).json({message:"all students", data:allmentors})
    } catch (error) {
        console.log(error);
        
    }
}
//5 student for particular mentor 
export const particularMentor = async (req, res )=>{
    try {
        const mentorid = req.params.id
        const mentor = await Mentors.findById(mentorid).populate('studentId')
        console.log(mentor);
        if(mentor){
            res.status(200).json({Mentor:mentor.firstName , Student: mentor.studentId.map(item => item.firstName )})
        }
        else {
            res.status(404).json({message:"data not found"})
        }
        
    } catch (error) {
        console.log(error);
    }
}
//3 assign a student to mentor 

export const assignStudentToMentor = async (req , res)=>{
    const {mentorId , studentId} = req.body ;
    try {
        const mentor = await Mentors.findById(mentorId)
        if(!mentor){
             return res.status(404).json({message:"mentor not found"})
        } 
        const student = await Students.findById(studentId)
        if(!student){
           return res.status(404).json({message:"student not found"})
        }
        //check mentor has student
       if (mentor.students.includes(studentId)) {
         return res.status(400).json({message:"mentor already has student"})
       }
       else{
        //assign student to mentor
        mentor.students.push(studentId)
        await mentor.save();
       }
    } 
    catch (error) {
        console.log(error);     
    }
}