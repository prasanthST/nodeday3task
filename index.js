import  express from  'express';
import cors from  'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConfig.js';
import studRouter from './Router/Student.router.js';
import mentorRouter from './Router/Mentor.router.js';

dotenv.config()
 
const app = express();
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('application in working ');
});

app.use('/api/stu', studRouter)

app.use('/api/mentor', mentorRouter)

connectDB(); 

app.listen(process.env.PORT, (req , res) => {
    console.log('server is running on port '+ process.env.PORT);
});