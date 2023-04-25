import express from 'express';
import { createsurvey} from '../controller/survey.js'


const router = express.Router();

router.post('/', createsurvey) 

export default router