const express = require('express');
const app = express();

var http = require('http');
app.use(express.static('public'));
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).send('Exam made easy');
    });
        
const port = 7000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
// how to use websocket in nodejs?



