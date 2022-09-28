import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import CustomerList from '../../services/AdminService/CustomerList'
import RideList from '../../services/AdminService/RideList'
import DriverList from '../../services/AdminService/DriverList'

import { useState,useEffect } from 'react'
import './pglayout.css'

const AdminDashboard = () => {

   
  const user = JSON.parse(sessionStorage.getItem('admin-info'))
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
        
       {/* <button onClick={()=>{navigate("/get_Customerlist")}}> Customer list </button><br/><br/>
        <button onClick={()=>{navigate("/get_ridelist")}}> Ride list </button> */}
        <br/><h3>Dashboard</h3> <br/><br/><br/>
        <button className='btn btn-primary' style={{height:'60px'}} onClick={()=>setActive("CustomerList")}>Customer List</button><br/><br/>
        <button className='btn btn-primary' onClick={()=>setActive("DriverList")}>Driver List</button><br/><br/>
          <button className='btn btn-primary' onClick={()=>setActive("RideList")}>Ride List</button>
      </div>
      
      <div className="col-sm-10 text-left"> 
      <div className='dashboard'>
        <h1>Welcome, {name}</h1>
        {active === "CustomerList" && <CustomerList/>}
        
        {active === "DriverList" && <DriverList/>}
      {active === "RideList" && <RideList/>}
      
        
      </div>
    
      </div>
    </div>
  </div>
  </div>
  )
}

export default AdminDashboard