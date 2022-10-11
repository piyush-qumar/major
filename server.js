const dotenv=require('dotenv');
const app=require("./app")
const mongoose=require('mongoose');
dotenv.config({path:'./config.env'});

//const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
//process.env.DATABASE_LOCAL
mongoose.connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser:true,  
    //useCreateIndex: true,
    useUnifiedTopology: true, //to avoid deprecation warning
}).then(()=>console.log(`DB is connected`));//.catch(err=>console.log(err));


const port = 7000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});