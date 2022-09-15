const { json } = require("body-parser");
const express = require("express");
const router = express.Router();

const { Employee } = require("../models/employee");

//get all data
router.get("/api/employee", (req, res) => {
  Employee.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);  
    }
  });
});
//data 

// //get all data another method
// router.get('/api/employee',(req,res) =>{
//     Employee.find()
//         .then((result) =>{
//             res.send(result);
//         })
//         .catch((err) =>{
//             console.log(err);
//         })

        
// });

//save employee
router.post('/api/employee/add',(req,res) =>{
    const emp = new Employee({
        email:req.body.email,
        password:req.body.password,
        birthday:req.body.birthday
    });
    emp.save((err,data) =>{
        res.status(200).json({code:200,message:'employee add success',addEmployee:data});
    });
});

//get one single data
router.get('/api/employee/:id',(req,res) =>{
    Employee.findById(req.params.id,(err,data) =>{
        if(!err){
            res.send(data);
        }else{
            console.log(err);
        }
    });
});

//update data 
router.put('/api/employee/edit/:id',(req,res) =>{
    const emp = {
        email:req.body.email,
        password:req.body.password,
        birthday:req.body.birthday
    };
    Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,data) =>{
        if(!err){
            res.status(200).json({code:200,message:'Employee update sucessfuly',updateEmployee:data});
        }else{
            console.log(err);
        }
    });
});

//delete the employee 
router.delete('/api/employee/:id',(req,res) =>{
    Employee.findByIdAndDelete(req.params.id, (err,data) =>{
        if(!err){
            res.status(200).json({code:200, message:'Employee deleted',deleteEmployee:data});
          //res.status(200).json({code:200,message:'employee add success',addEmployee:data});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;
