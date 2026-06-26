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

    // let x=90;
    // console.log(x);
    const studentSchema=new mongoose.Schema({
//   name:String,
//   age:Number,
//   course:String
name:{
    type:String,
    minlength:3,
    required:true
},
age:{
    type:Number,
    min:18,
    required:false
},
email:{
    type:String,
    required:true,
    unique:true
}

});

//model;
const Student=mongoose.model("Student",studentSchema);


app.get("/student",async(req,res)=>{
        
    let allstudent= await Student.find();  ///async task
    let obj={
    "name":"vamshi",
     age:20
    };
//     console.log(allstudent);
//     res.send (allstudent);
     res.render("students.ejs",{allstudent})
     
})
app.get("/insertdata",(req,res)=>{
    res.render("form.ejs");
})

app.post("/createdata",async(req,res)=>{
    try{
    console.log(req.body);

    let data = await Student.create(req.body) // db creatation
    console.log(data);
    }catch(error){
        res.status(500).send("somthing went wrong!")
    }
    


    res.send("data saved succesfully")
    
})

    // app.get("/",(req,res)=>{
    //     res.send("home page");
    // })
    













 
app.listen(3000,()=>{
    console.log("server is running at 3000 port");
    
  
    
    
});