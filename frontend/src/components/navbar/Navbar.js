import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

  const navigate=useNavigate();

const logout=()=>{

  localStorage.clear();
  navigate("/")

}


  return (
    <div>
        <ul>
  <li><a href="/">Home</a></li> &nbsp;
  <li><a href="/contact">Contact</a></li>&nbsp;
  <li><a href="/about">About</a></li> &nbsp;
  <li><a href="/login">Login</a></li>&nbsp;
  <li><a href="/Cust_Signup">Signup</a></li>&nbsp;
  <li className='admin'><a href="/adminlogin">Admin</a></li>
 

  {localStorage.getItem('user-info')?
            <button onClick={logout}>Logout</button>
            :null
            }
  
</ul>


    </div>
    
  )
}

export default Navbar