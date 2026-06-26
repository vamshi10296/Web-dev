const mongoose=require("mongoose")

const MONGO_URI=process.env.MONGO_URI;


const connectDB=async()=>{
    try{
        await mongoose.connect(MONGO_URI)

        console.log("mongoose connected...")

    }catch(error){
        console.log(error);
        
    }

}
module.exports=connectDB