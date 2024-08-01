const Group=require('../models/Group')
const mongoose = require('mongoose');
// Helper function to send an error response
const errorResponse = (res, statusCode, message) => {
    res.status(statusCode).json({
        success: false,
        message,
    });
};

exports.creatGroup=async (req,res)=>{
    try {
        const {groupName,groupColor}=req.body;
        if(!groupName||!groupColour){
            return errorResponse(res,400,"All fields are required..")
        }
        const group=await Group.create({
            groupName,
            groupColor
        })
        return res.status(201).json({
            success:false,
            message:"Group Created Succesfully",
            data:{_id:group._id,groupName:groupName,groupColor:groupColor}
        })
    } catch (error) {
        console.error(err);
        errorResponse(res, 500, 'Internal server error');
    }
}

exports.getGroups=async (req,res)=>{
    try {
        const groups=await Group.find({}).select("_id groupName groupColor");
        return res.status(201).json({
            success:false,
            message:"Groups fetched Succesfully",
            data:groups
        })
    } catch (error) {
        console.error(err);
        errorResponse(res, 500, 'Internal server error');
    }
}