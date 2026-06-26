const express = require("express");
const mongoose=require("mongoose");
const app =express();


app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


 mongoose.connect("mongodb://127.0.0.1:27017/coursedb")
.then(() =>{
    console.log("DB Connected")})

.catch(err =>{
    console.log(err)});

    const courseSchema = new mongoose.Schema({
    courseName: String,
    trainerName: String,
    duration: String,
    fees: Number,
    mode: String
});

//model
 const Course = mongoose.model("Course", courseSchema);
 app.get("/", (req, res) => {
    res.render("home");
});


app.get("/delete/:id", async(req,res)=>{
    await Course.findByIdAndDelete(req.params.id);
    res.redirect("/courses");
});


app.get("/edit/:id", async(req,res)=>{
    let data = await Course.findById(req.params.id);
    res.render("editCourse",{data});
});



app.post("/update/:id", async(req,res)=>{

    let data = await Course.findByIdAndUpdate(req.params.id, req.body,{new:true});
    console.log(data);
    res.redirect("/courses");

});

app.get("/courses", async(req,res)=>{

    let allcourses = await Course.find();

    res.render("courses",{allcourses});

});

app.get("/insertdata",(req,res)=>{
    res.render("form");
});

 app.post("/createdata", async(req,res)=>{
    try{
        let data = await Course.create(req.body);
        console.log(data);
        res.redirect("/courses");
    }
    catch(error){
        res.status(500).send("Something went wrong");
    }
});



    app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});