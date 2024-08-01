const mongoose=require('mongoose');

const groupSchema=new mongoose.Schema({
    groupName:{
        type:String,
        required:true
    },
    groupColor:{
        type:String,
        required:true
    },
    groupLogo:{
        type:String,
        required:true
    },
    notes:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Note"
        }
    ]
})

module.exports=mongoose.model('Group',groupSchema);