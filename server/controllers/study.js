const studyModel = require("../models/study");

const addStudy = async (req, res) => {
    const {name, description, phase, sponsorName} = req.body;
    const success = false;
    if( !name || !description || !phase || !sponsorName) return res.status(400).json({success, "Message":"All fileds are required"});
    try {
        const study = await studyModel.create({name, description, phase, sponsorName});
        return res.status(200).json({success : true, "Message":"Study added"});
    } catch (error) {
        return res.status(500).json({success, "Message":"Internal server error"});
    }
}

const updateStudy = async (req, res) => {
    let success = false;
    try {
        const study = await studyModel.findById(req.body._id);
        if(!study) return res.status(404).json({success, "Message":"Study not found"});
        await studyModel.findByIdAndUpdate(req.body._id, {...req.body});
        return res.status(200).json({success : true, "Message":"Study updated"});
    } catch (error) {
        return res.status(500).json({success, "Message":"Internal server error"});
    }
}

const deleteStudy = async (req, res) => {
    let success = false;
    try {
        const study = await studyModel.find({"_id":{$in:req.body.elementId}});
        if(!study) return res.status(404).json({"Message":"Study not found"});
        await studyModel.deleteMany({"_id":{$in:req.body}});
        return res.status(200).json({success : true, "Message":"Study deleted"});
    } catch (error) {
        return res.status(500).json({success, "Message":"Internal server error"});
    }
}

const getAllStudy = async (req, res) => {
    try {
        const study = await studyModel.find();
        return res.status(200).json(study);
    } catch (error) {
        return res.status(500).json({success, "Message":"Internal server error"});
    }
}

module.exports = {
    addStudy,
    updateStudy,
    deleteStudy,
    getAllStudy
}