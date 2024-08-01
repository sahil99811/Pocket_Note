import React from 'react';
import '../../styles/GroupCard.css';
import { useDispatch } from 'react-redux';
import { setSelectedGroup } from '../../slices/groupSlice';

// Group component represents a single group item in the sidebar
// Props:- data: Object containing group data (groupName, groupColor, groupLogo)
const Group = ({ data }) => {
  const dispatch = useDispatch();

  // Function to handle click event on the group item
  const onClickHandler = () => {
    console.log(data._id);
    // Dispatch action to set the selected group
    dispatch(setSelectedGroup(data._id));
  };

  return (
    <div className='group' onClick={onClickHandler}>
      {/* Display group logo with background color */}
      <div className='group-logo' style={{ background: data.groupColor }}>
        {data.groupLogo}
      </div>
      {/* Display group name */}
      <h3 className='group-name'>{data.groupName}</h3>
    </div>
  );
};

export default Group;