const express=require("express");
const mongoose=require("mongoose");


const app = express();
app.set("view engine","ejs");





 mongoose.connect("mongodb://127.0.0.1:27017/collegedb")
.then(() =>{
    console.log("DB Connected")})

.catch(err =>{
    console.log(err)});

    // let x=90;
    // console.log(x);
    const studentSchema=new mongoose.Schema({
  name:String,
  age:Number,
  course:String
});

//model;
const Student=mongoose.model("Students",studentSchema);


app.get("/student",async(req,res)=>{
        
    let allstudent= await Student.find();  ///async task
    let obj={
    "name":"vamshi",
     age:20
    };
//     console.log(allstudent);
//     res.send (allstudent);
     res.render("student.ejs",{allstudent})
     
})

    // app.get("/",(req,res)=>{
    //     res.send("home page");
    // })
    













 
app.listen(3000,()=>{
    console.log("server is running at 3000 port");
    
  
    
    
});