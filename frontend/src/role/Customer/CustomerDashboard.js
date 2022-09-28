import React from 'react'
import { useState,useEffect } from 'react'
import CustomerProfile from '../../services/CustomerService/CustomerProfile'
import FindRide from '../../services/CustomerService/FindRide'
import DeactivateCustomer from '../../services/CustomerService/DeactivateCustomer'
import { useNavigate,Link } from "react-router-dom";
import './Dashboard.css'
import './Sidenav.css'
import './pglayout.css'

const CustomerDashboard = () => {


  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem('user-info'))
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
        <button className='btn btn-primary' onClick={()=>setActive("CustomerProfile")}>Profile</button><br/><br/>

<button className='btn btn-primary' onClick={()=>setActive("FindRide")}>FindRide</button><br/><br/>

<button className='btn btn-primary' onClick={()=>setActive("DeactivateCustomer")}>Deactivate</button><br/><br/>
        
      </div>
      
      <div className="col-sm-10 text-left"> 
      <div className='dashboard'>
        <h1>Welcome, {name}</h1>
        
      {active === "CustomerProfile" && <CustomerProfile/>}
      {active === "FindRide" && <FindRide/>}
      {active === "DeactivateCustomer" && <DeactivateCustomer/>}
      
        
      </div>
    
      </div>
    </div>
  </div>
  </div>
  )
}

export default CustomerDashboard