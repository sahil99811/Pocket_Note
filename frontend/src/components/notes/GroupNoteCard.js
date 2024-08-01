import React from 'react'
import '../../styles/GroupNoteCard.css'
import {formattedDate} from '../../utils/dateFormatter'

export default function GroupNoteCard({ data }) {
  const {date,time}=formattedDate(data.createdAt)
  console.log(date,time);
  return (
    <div className='notecard-container'>
      {/* Note content */}
      <p>{data.text}</p>
      {/* Date and time section */}
      <div className='date-time'>
        {/* Date */}
        <span>{date}</span>
        {/* Empty paragraph for spacing */}
        <p></p>
        {/* Time */}
        <span>{time}</span>
      </div>
    </div>
  )
}


