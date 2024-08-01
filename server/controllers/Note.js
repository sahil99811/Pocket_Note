const Group = require('../models/Group');
const Note=require('../models/Note');
const mongoose=require('mongoose')
const errorResponse = (res, statusCode, message) => {
    res.status(statusCode).json({
        success: false,
        message,
    });
};
exports.createNote=async (req,res)=>{
    try {
        const {text}=req.body;
        const {groupId}=req.params;
        if(!text){
            return errorResponse(res,400,"Note is required");
        }
        else if (!mongoose.Types.ObjectId.isValid(groupId)) {
            return errorResponse(res,404,"Invalid group ID");
        }
       const note= await Note.create({text});

       await Group.findByIdAndUpdate(
        groupId,
        {
            $push: { notes: note._id }
        }
      );
      return res.status(201).json({
        success: true,
        message: "Note created successfully"
      });
    } catch (err) {
        console.error(err);
        errorResponse(res, 500, 'Internal server error');
    }
}

exports.getNotes=async (req,res)=>{
    try {
        const {groupId}=req.params;
        if(!groupId){
            return errorResponse(res,400,"Group Id isrequired");
        }
        if (!mongoose.Types.ObjectId.isValid(groupId)) {
            return errorResponse(res,404,"Invalid group ID");
        }
        const Notes=await Group.findById({_id:groupId}).select("notes createdAt").populate({
            path:"notes"
        })
        return res.status(201).json({
            success: true,
            message: "Note fetched successfully",
            data:Notes
          });
    } catch (err) {
        console.error(err);
        errorResponse(res, 500, 'Internal server error');
    }
}