import express from  'express'; 
import { createStudent  , allStudents , changementor, withoutmentor, previousmentor} from '../Controllers/Student.controller.js';


const router = express.Router();

router.post( '/create/stu' , createStudent )

router.get('/all/stu' , allStudents)

router.put("/assignmentor/:studentId" , changementor)

router.get( '/withoutmentor', withoutmentor,)

router.get('/previousmentor/:studentId', previousmentor)

export default router;