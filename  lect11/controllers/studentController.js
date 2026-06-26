const studentController={
    home:(req,res)=>{
        res.send("this is student home page")
    },
    marks:(req,res)=>{
     
        res.send("this is student maks")
    },
    attendence:(req,res)=>{
     
        res.send("this is student attendence")
    }
}

module.exports=studentController;