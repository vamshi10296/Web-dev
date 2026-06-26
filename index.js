let express=require("express");
console.log(express);
let port=3000;

let app=express();
// console.log(x)

app.get("/",(req,res)=>{
    console.log("hello");
    res.send("clinet ko bhej diya...!")
    
})
app.get("/payment",(req,res)=>{
    console.log("serverside rendering...!");
    res.send("payment is not yet done...")
    
})
app.get("/server",(req,res)=>{
    console.log("serverside rendering ...!");
    res.send("payment is not yet done in the browser side...")
    
})

// app.get("*",(req,res)=>{
//     console.log("serverside rendering ...!");
//     res.send("payment is not yet done in the browser...")
    
// })


app.listen(3000,()=>{
    console.log(`server is starting at port ${port}`);
    
}); 