const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const EmployeeCollection= new Schema(
    {
        id:Number,
        firstName:String,
        lastName:String,
        age:Number,
        dateOfJoining:Date,
        title:String,
        department:String,
        employeeType:String,
        currentStatus:Boolean,
    }
);

const empModel =mongoose.model('empModel', EmployeeCollection,"employees");
module.exports=empModel;
