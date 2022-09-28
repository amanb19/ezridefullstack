import React from 'react'
import { Link } from "react-router-dom";
import './Home.css';
import home from '../../assets/home.jpg'
import './loginbtn.css'
const Home = () => {

  
  return (
    <div className='home'>

    <div className="grid-container">
  <div className="item1" >
  <img className='logo' src={home}  alt="Ezride"  style={{height:'400px' ,width:'600px'}} />
  {/* <h1>This is Home Page</h1>
        <h1>Welcome to Easy ride</h1>
        <h3>Making travelling easier and affordable</h3> */}
</div>
<div className="vl"></div>

  <div className="item2">
    <h3>Please choose , are you a customer or driver ?</h3><br/>
  {/* <Link to="/customer_login" className="btn btn-primary btn-lg btn-block ">Customer</Link><br/> */}
  {/* <button class="button-21" role="button">Customer</button> */}
  <Link to="/customer_login" className=" button-21">Customer</Link><br/>
  <p>or</p>
  <Link to="/driver_login"  className=" button-21">Driver</Link><br/><br/>

 
  {/* <Link to="/about"><h3>Click here to know more</h3></Link>
        */}
       
</div>
</div>

    
     </div>
  )
}

export default Home