import React from 'react';
import '../../styles/SideBar.css';
import GroupCard from './GroupCard';
import { useSelector } from 'react-redux';

// Sidebar component displays a list of groups and a button to create a new group
// Props:-openModal: Function to open the modal for creating a new group
const Sidebar = ({ openModal }) => {
  // Get groups from Redux store
  const { groups } = useSelector((state) => state.group);
 
  return (
    <div className='sidebar-container' >
      <h2>Pocket Notes</h2>
      {/* Render group cards */}
      <div className='group-container'>
        {groups.map((item, index) => (
          <GroupCard key={index} data={item} />
        ))}
      </div>
      {/* Button to open modal for creating a new group */}
      <button onClick={openModal} className='createGroup-button'>+</button>
    </div>
  );
}

export default Sidebar;