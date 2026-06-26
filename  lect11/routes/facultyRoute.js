const express = require("express");
const route=express.Router();






route.get("/",facultyController.home);
route.get("/salary",facultyController.salary);
route.get("/attendence",facultyController.home);