const express=require("express");
const mongoose=require("mongoose");


const app = express();
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





 mongoose.connect("mongodb://127.0.0.1:27017/collegedb")
.then(() =>{
    console.log("DB Connected")})

.catch(err =>{
    console.log(err)});

     
    const studentSchema=new mongoose.Schema({
  name:String,
  age:Number,
  course:String
    })
 

//model;
const Student=mongoose.model("Student",studentSchema);


app.get("/",(req,res)=>{
        
    
 
     res.render("home.ejs" )
     
})
app.get("/test",async(req,res)=>{
    // let data=await Student.find({name:"wick"});
    // let data=await Student.updateOne({ name:"vamshi" }, { name:"pandu" });
    // let data=await Student.deleteOne({name:"vamshi"},{name:"pandu"}) face
      
    let data=await Student.findByIdAndDelete('6a30eb5181373d8f1b1853ed')
    console.log(data);
    
    res.send("hii bye");
})


 
app.listen(3000,()=>{
    console.log("server is running at 3000 port");
    
  
    
    
});