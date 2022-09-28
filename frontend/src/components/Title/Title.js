import React from 'react'
import './Title.css';
import logon2 from '../../assets/logon2.jpeg';
import { Link } from 'react-router-dom'

function Title() {
  return (
    
    <div className="Title">
       <a href="/ma_login" target="_blank" rel="noreferrer">
         <img className='logo' src={logon2}  alt="Ezride"   />
         </a>
      <p className='h1'><i>EzRide</i></p>
     
    </div>
  )
}

export default Title