const express = require("express")
const app=express();
const dotenv=require("dotenv");
dotenv.config();
// require("dotenv").config();
const connectDB=require("./config/db.js");
const auth=require("./middleware/auth.js");
const studentRoute=require("./routes/studentRoute.js")
// const studentRoute=require("./routes/studentRoute.js")

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(auth);

const PORT=process.env.PORT;
console.log(PORT);
connectDB();
app.use("/".studentRoute)



console.log(process.env);



app.get("/",(req,res)=>{
    res.send("home page")

})





app.listen(PORT,()=>{
    console.log("server is running on 3000 port");
    
})







