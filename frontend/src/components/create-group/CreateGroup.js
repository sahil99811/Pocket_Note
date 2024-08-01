import React, { useState } from 'react';
import '../../styles/CreateGroup.css';
import { useSelector, useDispatch } from 'react-redux';
import { setGroups } from '../../slices/groupSlice';
import { toast } from 'react-toastify';
import {addGroup} from '../../apis/Group'
// Define available colors for the group
const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

// CreateGroup component
export default function CreateGroup({ closeModal }) {
  const dispatch = useDispatch();
  
  // Get groups from Redux store
  const { groups } = useSelector((state) => state.group);
  // State for the form data
  const [groupData, setGroupData] = useState({
    groupName: "",
    groupColor: ""
  });
  
  // Check if group name already exists
  const isGroupExists = (groupName) => {
    return groups.some(group => group.groupName.toLowerCase() === groupName.toLowerCase());
  };

  // Handle form input change
  const handleChange = (event) => {
    const color = event.currentTarget.getAttribute('color');
    if (color) {
      setGroupData({...groupData, groupColor: color});
      return;
    }
    setGroupData({...groupData, [event.target.name]: event.target.value});
  };

  // Function to split group name for logo
  const splitGroupName = (groupName) => {
    const words = groupName.split(" ").slice(0, 2);
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    } else {
      return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
    }
  };

  // Function to handle group creation
  const createGroup =async (event) => {
    event.preventDefault();
    const { groupName, groupColor } = groupData;

    // Validate group name and color
    if (groupName === "") {
      toast.error("GroupName is required");
      return;
    } else if (groupColor === "") {
      toast.error("Choose a group color");
      return;
    }

    // Check if group name already exists
    if (isGroupExists(groupName)) {
      toast.error("Group already present choose different GroupName");
      return;
    }

    // Reset form data
    setGroupData({ groupName: "", groupColor: "" });

    // Create new group object
    const logo = splitGroupName(groupName);
    const newGroup=await addGroup(groupName,groupColor,logo)
    if(newGroup){
        // Dispatch action to update Redux state
       const newGroups = [...groups, newGroup];
       dispatch(setGroups(newGroups));

      // Display success message and close modal
      toast.success("Group Created Successfully");
      closeModal();
    }
   
  };

  return (
    <div className='creategroup-container'>
      <form>
        <h3>Create New Group</h3>
        <div className='groupName'>
          <label htmlFor="groupName">Group Name</label>
          <input 
            type='text'
            id='groupName'
            placeholder='Enter group name'
            required="required"
            onChange={handleChange}
            value={groupData.groupName}
            name='groupName'
          />
        </div>
        <div className='groupColor-container'>
          <p>Choose colour</p>
          <div className='groupColor'>
            {colors.map((color, index) => (
              <div
                key={index}
                className='selectColor'
                style={{ background: color, border: groupData.groupColor === color ? "3px solid black" : "none" }}
                onClick={handleChange}
                color={color}
                name="groupColor"
              ></div>
            ))}
          </div>
        </div>
        <button onClick={createGroup}>Create</button>
      </form>
    </div>
  );
}