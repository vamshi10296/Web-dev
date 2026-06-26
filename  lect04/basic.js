let student={
    name:"raj kumar",
    age:20,
    address:"delhi"
};
console.log(typeof(student));
student=JSON.stringify(student); // converting object to string
console.log(typeof(student));

student=JSON.parse(student); // converting string to object

console.log(typeof(student));





