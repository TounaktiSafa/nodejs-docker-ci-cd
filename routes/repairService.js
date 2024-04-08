const express = require('express');
const router = express.Router();
const repairService=require('../models/repairService');
router.post('/addService',async(req,res)=>{
    try {
        const data = req.body;
        
        const service = new repairService({
            objet: data.objet,
            description: data.description
        });
        await service.save();
        res.status(200).json({ message: 'Service added successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'An error occurred while adding service' });
    }
});
router.get('/getService',async(req,res)=>{
   try{
       services=await repairService.find();
       res.send(services);
   } catch(error){
    res.send(error);
   }
})

router.delete('/delete/:objet',(req,res)=>{
    objet=req.params.objet
    repairService.findOneAndDelete({objet:objet})
    .then(
        (deletedserv)=>{
            res.send(deletedserv)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
})

router.put('/updateserv/:objet',(req,res)=>{
    objet=req.params.objet;
    newdata=req.body;
    repairService.findOneAndUpdate({objet:objet},{description:newdata.description})
    .then(
        (updated)=>{
            res.send(updated)
        }
    )
    .catch(
        (err)=>{
            res.send(err)
        }
    )
})
module.exports=router;