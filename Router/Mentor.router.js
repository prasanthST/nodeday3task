import express from 'express';
import { createMentor, allmentors , particularMentor , assignStudentToMentor} from '../Controllers/Mentor.controller.js';

const router = express.Router();

router.post('/create/mentor', createMentor);

router.get('/all/mentor', allmentors )

router.get('/mentor/:id' , particularMentor)

router.post('/mentor/assign', assignStudentToMentor)

export default router 
