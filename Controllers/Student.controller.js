import Students from "../Models/Student.schema.js"
import Mentors from "../Models/Mentor.schema.js"

//2 create a student 
export const createStudent = async (req, res)=>{
try {
    const newstudent = new Students(req.body)
    await newstudent.save()
    res.status(200).json({message:"Student created " , data:newstudent})
} catch (error) {
    console.log(error);   
}} 

//all students 
export const allStudents = async (req, res)=>{
    try {
        const allStudents = await Students.find()
        res.status(200).json({message:"all students", data:allStudents})
    } catch (error) {
        console.log(error);
        
    }
}
//4 change the mentor for particular student changementor
export const changementor= async (req, res )=>{
 const {studentId}= req.params;
 const {mentorId} = req.body;
 try {
    const student = await Students.findById(studentId)
    if(!student) return res.status(404).json({message:"Student not found"})
        console.log(student);
        
        const mentor = await Mentors.findById(mentorId) 
        if(!mentor) return res.status(404).json({message:"Mentor not found"})

            student.mentor = mentorId
            await student.save()
        res.status(200).json({message:"Mentor changed", data:student})
 } catch (error) {
    console.log(error); 
 }
}
//without mentor 

export const withoutmentor = async (req, res)=>{
    try {
        const withoutmentor = await Students.find({mentor:null})
        res.status(200).json({message:"students without mentor", data:withoutmentor})
    } catch (error) {
        console.log(error);
    }
}

//
export const previousmentor = async (req, res)=>{
    const {studentId} = req.params
    try {
        const student = await Students.findById(studentId).populate('mentor')
        if(!student) 
            return res.status(404).json({message:"Student not found"})
        res.status(200).json({message:"previous mentor", Student:student.firstName , Mentor:student.mentor.firstName})
       
    } catch (error) {
        console.log(error);
    }
}

