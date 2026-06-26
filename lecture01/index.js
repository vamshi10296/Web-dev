const express =require("express");
const app=express();
const PORT=4000;
//inbuild middleware

app.use(express.json());
//custom middleware
app.use((req,res)=>{
    console.log(req.path);
    console.log(("custom middleware"));


    
})
app.get("/",(req,res)=>{
    res.send("hello from sever")
});
app.listen(PORT,()=>console.log("sever running on port"+PORT));
 
