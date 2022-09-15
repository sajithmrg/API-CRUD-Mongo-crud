const mongoose = require('mongoose');

//employee schema
//what is ('Employee' ???
const Employee = mongoose.model('Employee',{
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    }

});

module.exports = {Employee}