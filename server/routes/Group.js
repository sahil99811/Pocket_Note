const express=require('express');
const router=express.Router();
const {creatGroup,getGroups}=require('../controllers/Group')
router.post("/group",creatGroup);
router.get('/groups',getGroups)

module.exports=router;