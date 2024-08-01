import React from 'react'
import image from '../../assets/defaultNoteImage.png'
import '../../styles/DefaultScreen.css'
import encrypted from '../../assets/encrypted.png'

// DefaultNote component displays a default note with an image and encrypted message
export default function DefaultScreen() {
  return (
    <div className='default-container'>
      {/* Default note section */}
      <div className='default-note'>
        {/* Image */}
        <img src={image} alt='notes'/>
        {/* Title */}
        <h2>Pocket Notes</h2>
        {/* Description */}
        <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
      {/* Encrypted message section */}
      <div className='encrypted-container'>
        {/* Encrypted icon */}
        <img src={encrypted} alt='encrypted'/>
        {/* Encrypted message */}
        <p>end-to-end encrypted</p>
      </div>
    </div>
  )
}