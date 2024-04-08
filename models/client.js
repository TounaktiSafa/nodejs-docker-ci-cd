const mongoose =require('mongoose');
const Client=mongoose.model('Client',{
name :{
    type :String
},
username:{
    type:String
}, 
email:{
    type:String
},
password:{
    type:String
},
role:{
    type:String
}

})
module.exports=Client