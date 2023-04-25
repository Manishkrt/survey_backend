import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
    question1 : {
        type : 'string',   
    },
    question2 : {
        type : 'string',   
    },
    question3 : {
        type : 'string',   
    },
    question4 : {
        type : 'string',   
    },
    question5 : {
        type : 'string',   
    },
    }
)

const Survey = mongoose.model('survey', surveySchema);

export default Survey;