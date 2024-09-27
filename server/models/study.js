const {Schema, model} = require('mongoose');

const studySchema = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    phase : {
        type : String,
        required : true
    },
    sponsorName : {
        type : String,
        required : true
    }
});

const studyModel = model("study", studySchema);

module.exports = studyModel;