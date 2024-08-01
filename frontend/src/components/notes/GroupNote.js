import React, { useEffect, useState } from 'react';
import '../../styles/GroupNote.css';
import disabledSend from '../../assets/disabledSend.png';
import enabledSend from '../../assets/enabledSend.png';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedGroup } from '../../slices/groupSlice';
import GroupNoteCard from './GroupNoteCard';
import {getNotes,createNote} from '../../apis/Note'
import arrow from '../../assets/arrow.png';

// GroupNote component displays notes for a selected group and allows adding new notes
export default function GroupNote() {
   // Redux hooks
   const dispatch = useDispatch();
   // Get selectedgroup from Redux store
   const { selectedGroup } = useSelector((state) => state.group);
   const [groupNote,setGroupNote]=useState([]);
   // Local state
  const [textAreaData, setTextAreaData] = useState("");

  // Function to handle change in textarea input
  const handleChange = (event) => {
    setTextAreaData(event.target.value);
  };

  // // Function to handle click event on the send button
  const onClickHandler =async  () => {
    // If textarea is empty, do nothing
    if (textAreaData === "") {
      return;
    }
    const res=await createNote(textAreaData,selectedGroup._id);
    if(res){
      setTextAreaData("");
      fetchNotes();
    }
   
  };
  const fetchNotes=async ()=>{
    const result=await getNotes(selectedGroup?._id);
    if(result){
      setGroupNote(result);
    }
  }

  // Effect to clear textarea when selectedGroup changes
  useEffect(() => {
    setTextAreaData("");
    fetchNotes();
  }, [selectedGroup.groupName]);

  // Function to handle click event on the back button
  const handleBack = () => {
    dispatch(setSelectedGroup(null));
  };

  return (
    <div className='groupName-container'>
      {/* Header section */}
      <header className='header'>
        {selectedGroup && (
          <button className='arrow-button' onClick={handleBack}>
            <img src={arrow} className='arrow' alt='Back' />
          </button>
        )}
        <div className='groupLogo' style={{ background: selectedGroup.groupColor, cursor: "pointer" }}>{selectedGroup.groupLogo}</div>
        <p>{selectedGroup.groupName}</p>
      </header>

      {/* Notes section */}
      <section className='groupNotes'>
        {/* Render GroupNoteCard for each note */}
        {groupNote?.map((note, index) => (
          <GroupNoteCard key={index} data={note} />
        ))} 
      </section>

      {/* Input Note section */}
      <div className='inputNote-container'>
        <div className='inputNote'>
          <textarea
            placeholder='Enter your text here.........'
            value={textAreaData}
            onChange={handleChange}
          ></textarea>
          <img
            src={textAreaData.length > 0 ? enabledSend : disabledSend}
            alt='sendnote'
            className='sendNote'
            onClick={onClickHandler}
          />
        </div>
      </div>
    </div>
  );
}
