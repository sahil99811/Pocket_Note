import React,{useState} from 'react'
import Modal from "react-modal";
import '../styles/HomePage.css'
import Sidebar from '../components/sidebar/Sidebar';
import CreateGroup from '../components/create-group/CreateGroup';
import { useSelector } from 'react-redux';
import DefaultScreen from '../components/notes/DefaultScreen';
import GroupNote from '../components/notes/GroupNote';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(47, 47, 47, 0.75)' 
      },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "440px",
      height: "220px",
      background: "#FFFFFF",
      borderRadius: "8px",
      border: "2px solid #CCCCCC",
      animation: "slideIn 1.5s ease-in-out"
    }
  };
  
Modal.setAppElement("#root");
export default function HomePage() {
    const { selectedGroup } = useSelector(state => state.group);
    const [modalIsOpen, setIsOpen] = useState(false);
    
    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }
    
  return (
    <div className='homepage-container'>
      <Sidebar openModal={openModal}/>
      {selectedGroup == null ? <DefaultScreen/>:<GroupNote/>}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Group Modal"
      >
       <CreateGroup closeModal={closeModal} />
      </Modal>
    </div>
  )
}
