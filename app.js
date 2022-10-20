const express = require('express');
const app = express();
const bodyParser=require("body-parser");
const rateLimit=require("express-rate-limit");
const morgan=require("morgan");
const helmet=require("helmet");
const mongoSanitize=require("express-mongo-sanitize");
const xss=require("xss-clean"); 
const hpp=require("hpp");
//const userRouter=require("./routes/userRoutes");

//var http = require('http');
const limiter=rateLimit({
    max:100,
    windowMs:60*60*1000,
    message:"Too many requests from this IP,please try again in an hour"
});
app.use("/api",limiter);
app.use(helmet());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static('public'));
app.use(express.json());
app.use(mongoSanitize());
if(process.env.NODE_ENV==='development'){  // development login
    app.use(morgan('dev'));}
    app.use((req,res,next)=>{
        console.log("Request received");
        //console.log(req.headers);// its task is to dispaly the headers of the request
        next();
    }) ;

    app.use((req,res,next)=>{
        req.time=new Date().toString();
        //console.log(req.headers);// this is to check the headers
        next();
    })
    app.get('/',(req,res)=>{
        res.send("Hello World");
    });
    //app.use("/api/users",userRouter);
    app.all("*",(req,res,next)=>{
        next(new AppError(`Invalid endpoint`));
        // const err=new Error(`Invalid endpoint`);
        // err.status='fail';
        // err.statusCode=404;
        // next(err);
    
    });

module.exports=app;

