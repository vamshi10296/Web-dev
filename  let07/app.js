const express = require("express");
const app = express();


app.set("view engine","ejs");
let vamshi={
     name:"vamshi",
     age:29,
     dist:"ranga reddy"
};
app.get("/",(req,res)=>{
    res.send("home page...")

})
app.get("/user",(req,res)=>{
    res.render("user",{vamshi})

})







app.listen(3000,()=>{
    console.log("server is running at 3000");
    
})
