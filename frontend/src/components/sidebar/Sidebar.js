import React, { useEffect } from 'react';
import '../../styles/SideBar.css';
import GroupCard from './GroupCard';
import {setGroups} from '../../slices/groupSlice'
import { useSelector ,useDispatch} from 'react-redux';
import {getGroups} from '../../apis/Group';


const Sidebar = ({ openModal }) => {
  // Get groups from Redux store
  const { groups } = useSelector((state) => state.group);
  const dispatch=useDispatch();
  const getGroup=async ()=>{
       const result=await getGroups();
       if(result){
        dispatch(setGroups(result))
       }
  }
  useEffect(()=>{
     getGroup();
  },[ ])
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