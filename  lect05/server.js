const express=require("express");
const app=express();
const port=3000;
// let i=0;

// app.use("/public" ,express.static("public"))
// app.use("/assets" ,express.static("assets"))
app.use(express.json())
const fs=require("fs");

// app.use((req,res,next)=>{
//     // i++;
//     // let data=`incoming req details=>${i},${req.ip},${req.url}timestamp=${new data()}/n`
//     // fs.appendFileSync("long.txt",data,"utf-8")
    
//     next();
// })


app.get("/",(req,res)=>{
      res.send("home")    
})
app.post("/",(req,res)=>{
    console.log(req.body);
    fs.appendFileSync("data.json",req.body,JSON.stringify()+"\n"+req.ip,"utf8")
    req.send("data saved succesfully")
    
})


app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
    
})