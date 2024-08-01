const express=require('express');
const router=express.Router();
const {createGroup,getGroups}=require('../controllers/Group')
router.post("/group",createGroup);
router.get('/groups',getGroups)

module.exports=router;