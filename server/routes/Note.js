const express=require('express');
const router=express.Router();
const {createNote,getNotes}=require('../controllers/Note')
router.post("/note/:groupId",createNote);
router.get('/notes/:groupId',getNotes)

module.exports=router;