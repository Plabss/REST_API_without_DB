const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const usersRouter=require('./routes/users.route');
const app=express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//User router
app.use(usersRouter);

//home route
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

//route not found
app.use((req,res,next)=>{
    res.status(404).json({
        message:"Route Not found!"
    })
})

//Server error
app.use((req,res,next)=>{
    res.status(500).json({
        message:"Something is broke!"
    })
})

module.exports=app;



