const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});
const app=require("./app")
const mongoose=require('mongoose');

const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
//process.env.DATABASE_LOCAL
mongoose.connect(DB, {
    useNewUrlParser:true,  
    //useCreateIndex: true,
    useUnifiedTopology: true, //to avoid deprecation warning
}).then(()=>console.log(`DB is connected`));//.catch(err=>console.log(err));

console.log(app.get('env'));
const port = 7000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});