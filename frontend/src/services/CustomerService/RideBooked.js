import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const RideBooked = () => {

    const navigate = useNavigate();

  return (
    <div><h1>Ride Booked !!!!!!!!!</h1>
    
  
    <button className="btn btn-primary" onClick={()=>{navigate('/customer_dashboard')}}>Go back to profile </button>
    
    
    </div>
  )
}

export default RideBooked