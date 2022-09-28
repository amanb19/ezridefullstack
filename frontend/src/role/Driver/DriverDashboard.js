import React from 'react'
import { useState,useEffect } from 'react'
import AddRide from '../../services/DriverService/AddRide'

import DriverProfile from '../../services/DriverService/DriverProfile'
import DeactivateDriver from '../../services/DriverService/DeactivateDriver'
import './pglayout.css'


const DriverDashboard = () => {



  const user = JSON.parse(sessionStorage.getItem('driver-info'))
  const [name,setName] = useState('');
  const [active,setActive]= useState("Profile")


  useEffect(()=>{
    

 setName(user.name);
//  if(user.name=null)
//  {
//    alert("Wrong info");
//    navigate('/customer_login')
        
//  }
      

  },[])
    
  return (
    <div >
    <div className="container-fluid text-center">    
    <div className="row content">
      <div className="col-sm-2 sidenav">
        
      <h3>Dashboard</h3> <br/> <br/>
        <button className='btn btn-primary' onClick={()=>setActive("DriverProfile")}>Profile</button><br/><br/>

<button className='btn btn-primary' onClick={()=>setActive("AddRide")}>Add Ride</button><br/><br/>

<button className='btn btn-primary' onClick={()=>setActive("DeactivateDriver")}>Deactivate</button><br/><br/>
        
      </div>
      
      <div className="col-sm-10 text-left"> 
      <div className='dashboard'>
        <h1>Welcome, {name}</h1>
        
      {active === "DriverProfile" && <DriverProfile/>}
      {active === "AddRide" && <AddRide/>}
      {active === "DeactivateDriver" && <DeactivateDriver/>}
      
        
      </div>
    
      </div>
    </div>
  </div>
  </div>
  )
}

export default DriverDashboard