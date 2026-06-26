const express=require("express");
const app=express()
let student={
    "name":"vamshi",
    "friend":"rayaan",
    "age":23,
    "gf":false
}
let college = "mirai"


app.set("view engine","ejs");


app.get("/",(req,res)=>{
    res.send("home page...")
})

app.get("/aktu/result/:year/:roll",(req,res)=>{
    console.log(req.params);
    //db searching start
    //result ayega
    if(req.params.roll< 50){
        res.send("pass")
    }
    else{
        res.send("fail")
    }

    res.send("pass ho gaya bhai..")
    
})


app.get("/search",(req,res)=>{
    console.log(req.query);
    //query db me search ki jayegi
    res.send("your dat found and rendered...")
    
})



app.get("/user",(req,res)=>{
       console.log("inside / user route.. ");
       res.render("user",{student,college})
})



app.listen(3000,()=>{
    console.log("server is running at 3000 port");
    
  
    
    
})