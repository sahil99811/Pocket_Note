import React from 'react'
import statuscode from '../assets/statuscode.png'
import '../styles/ErrorPage.css'
export default function ErrorPage() {
  return (
    <div className='container'>
        <img src={statuscode} alt='erroImage'></img>
    </div>
  )
}
