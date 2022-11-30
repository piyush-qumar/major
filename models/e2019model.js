const mongoose = require("mongoose");
const validator = require("validator");
const sub19Schema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'A subject must have a name'],
        unique:true,
        trim:true,
        //maxlength:[40,'A subject name must have less or equal than 40 characters'],
        //minlength:[10,'A subject name must have more or equal than 10 characters']
    },
    code:{
        type:String,
        required:[true,'A subject must have a code'],
        unique:true,
        trim:true,
        //maxlength:[10,'A subject code must have less or equal than 10 characters'],
        //minlength:[10,'A subject code must have more or equal than 10 characters']
    },
    year:{
        type:Number,
        required:[true,'A subject must have a year'],
        trim:true,
    },
    startTime:{
        type:Date,
        required:[true,'A subject must have a start time']
    },
    endTime:{
        type:Date,
        required:[true,'A subject must have a end time']
    },
    examDate:{
        type:Date,
        required:[true,'A subject must have a exam date']
    },
    examDuration:{
        type:Number,
        required:[true,'A subject must have a exam duration']
    }
});
const Sub19=mongoose.model('Sub19',sub19Schema);
module.exports=Sub19;