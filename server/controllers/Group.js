const Group=require('../models/Group')
const mongoose = require('mongoose');
// Helper function to send an error response
const errorResponse = (res, statusCode, message) => {
    res.status(statusCode).json({
        success: false,
        message,
    });
};

exports.createGroup=async (req,res)=>{
    try {
        const {groupName,groupColor,groupLogo}=req.body;
        if(!groupName||!groupColor||!groupLogo){
            return errorResponse(res,400,"All fields are required..")
        }
        const group=await Group.create({
            groupName,
            groupColor,
            groupLogo
        })
        return res.status(201).json({
            success:false,
            message:"Group Created Succesfully",
            data:{_id:group._id,groupName:groupName,groupColor:groupColor,groupLogo:groupLogo}
        })
    } catch (err) {
        console.error(err);
        errorResponse(res, 500, 'Internal server error');
    }
}

exports.getGroups=async (req,res)=>{
    try {
        const groups=await Group.find({}).select("_id groupName groupColor groupLogo");
        return res.status(201).json({
            success:false,
            message:"Groups fetched Succesfully",
            data:groups
        })
    } catch (err) {
        console.error(err);
        errorResponse(res, 500, 'Internal server error');
    }
}