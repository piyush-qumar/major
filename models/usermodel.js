const mongoose = require("mongoose");
const crypto = require("crypto");
const validator = require("validator");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    unique: true,
    trim: true,
    maxlength: [40, "A user name must have less or equal than 40 characters"],
    //minlength:[10,'A user name must have more or equal than 10 characters']
  },
  email: {
    type: String,
    required: [true, "A user must have an email"],
    unique: true,
    lowercase: true,
  },
  regNo: {
    type: String,
    required: [true, "A user must have a registration number"],
    unique: true,
    trim: true,
    maxlength: [
      10,
      "A user registration number must have less or equal than 10 characters",
    ],
    minlength: [
      10,
      "A user registration number must have more or equal than 10 characters",
    ],
  },
  rollNo: {
    type: String,
    required: [true, "A user must have a roll number"],
    unique: true,
    trim: true,
    maxlength: [9, "A user roll number must have equal to 9 characters"],
    minlength: [9, "A user roll number must have equal to 9 characters"],
  },
  role: {
    type: String,
    trim: true,
    enum: ["student", "teacher", "idcrt", "admin", "squad"],
    default: "student",
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
    minlength: [5, "A user password must have more or equal than 5 characters"],
    //select: false,
  },
  id: {
    type: String,
    default: uuidv4(),
    unique: true,
    trim: true,
    // maxlength: [36, "A user id must have equal to 36 characters"],
    // minlength: [36, "A user id must have equal to 36 characters"],
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});
// userSchema.pre('save',async function(next){
//     //Only run this function if password was actually modified
//     if(!this.isModified('password')) return next();
//     //Hash the password with cost of 12
//     this.password=await bcrypt.hash(this.password,12);
//     //Delete passwordConfirm field
//     //this.passwordConfirm=undefined;
//     next();
// });
// userSchema.pre('save',function(next){
//     if(!this.isModified('password')||this.isNew) return next();
//     this.passwordChangedAt=Date.now()-1000;
//     next();
// });
// // userSchema.pre(/^find/,function(next){
// //     this.find({active:true});   // this.find({active:{$ne:false}});  // we can also use this in case of some conflict
// //     next();
// // })  //deprecated for good

// userSchema.methods.correctPassword=async function(candidatePassword,userPassword){
//     return await bcrypt.compare(candidatePassword,userPassword);
// };

// userSchema.methods.changedPasswordAfter=function(JWTTimestamp){
//     if(this.passwordChangedAt){
//         const changedTimestamp=parseInt(this.passwordChangedAt.getTime()/1000,10);
//         //console.log(this.changedTiemstamp,JWTTimestamp);
//         return JWTTimestamp<changedTimestamp;
//     }
//     return false;
// }

// userSchema.methods.createPasswordResetToken=function(){
//     const resetToken=crypto.randomBytes(32).toString('hex');
//     this.passwordResetToken=crypto.createHash('sha256').update(resetToken).digest('hex');
//     this.passwordResetExpires=Date.now()+10*60*1000;
//     console.log({resetToken},this.passwordResetToken);
//     return resetToken;
// }

const User = mongoose.model("User", userSchema);
//const id=uuidv4();
////////demo user///////////////
// const userexample=new User({
//     name:'Rahul',
//     email:'a@b.in',
//     regNo:'1901202173',
//     rollNo:'111111111',
//     password:'12345',
// })
// userexample.save().then(doc=>{
//     console.log(doc);
// }).catch(err=>{
//     console.log(err);
// });
////////demo user/////////////
module.exports = User;
