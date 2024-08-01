const express=require('express');
const router=express.Router();
const {createNote,getNotes}=require('../controllers/Note')
router.post("/note",createNote);
router.get('/notes/:groupId',getNotes)

module.exports=router;