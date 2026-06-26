const { log } = require("console");
const express=require("express");
const app=express();
const fs=require("fs");


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log("params :", req.params);  //get and post
    console.log("query :", req.query);  //get only
    console.log("body :", req.body); //post only
    console.log("url :", req.url); 

    


    console.log(req.query);
    next();
    
})




app.get('/about',(req,res)=>{
    res.send("about route page")
    
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    //write the append data in file
    fs.appendFileSync("data.json",JSON.stringify(req.body)+"\n"+req.ip,"utf8")
    res.send("registration completed...!")
    
})




app.listen(3000,()=>{
    console.log("server is running at 30000");
    
})