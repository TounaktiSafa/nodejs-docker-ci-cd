const mongoose =require('mongoose');
const Repairagent=mongoose.model('Repairagent',{
name :{
    type :String,
    
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
    type:String,
    enum:['Repair Agent','Shop Agent','Insurance Agent','client','Admin']
}

})
module.exports=Repairagent
