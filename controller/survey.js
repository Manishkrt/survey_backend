import Survey from '../model/survey.js'


export const createsurvey = async(req, res)=>{
    const data = req.body 
    const newSurvey = new Survey(data) 
    console.log(newSurvey)
    try{
        await newSurvey.save();
        res.status(201).json(newSurvey)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}
