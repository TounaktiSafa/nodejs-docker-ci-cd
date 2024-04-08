const mongoose =require('mongoose');
const Repairservice=mongoose.model('Repairservice',{
objet :{
    type :String
},

description:{
    type:String
}

})
module.exports=Repairservice
