 const express = require("express")
const app = express()
// const data = require("./data.json")
// console.log(data)
const fs = require("fs")

let content = fs.readFileSync("data.txt", "utf-8")
console.log(content);


app.use((req,res,next)=>{
    console.log("middleware 1.. user tyring to login");
    next();
    
})

app.use((req,res,next)=>{
    console.log(req.url);
    console.log(req.ip);
    let auth = true;
    if(auth){
        next();
    }
    else{
        res.send("Something went wrong....")
    }
})
app.get("/",(req,res)=>{
    // console.log(req.url);
    // console.log(req.ip);
    // res.send(data)
    res.send(content)
    
})

app.get("/payment",(req,res)=>{
    
    res.send("Pyament page.....")
    
    
})

app.listen(3000,()=>{
    console.log("Server is running at 3000");
    
})