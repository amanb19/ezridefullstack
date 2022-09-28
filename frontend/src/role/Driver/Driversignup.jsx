import './Driver.css'
import { useState } from 'react';
import axios from 'axios'   
import signup from '../../assets/signup.jpg'

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  
  function Driversignup() {

 // States for registration
 const [name, setName] = useState('');
 const [mobileNumber, setMobile] = useState('');
   const [email, setEmail] = useState('');
   const [aadhar, setAadhar] = useState('');
   const [password, setPassword] = useState('');

   const [capacity, setCapacity] = useState('');
   const [vehicleName, setVehicleName] = useState('');
   const [vehicleNumber, setVehicleNumber] = useState('');
   const [vehicleType, setVehicleType] = useState('');


   const driverDto = {"capacity":capacity,"vehicleName":vehicleName,"vehicleNumber":vehicleNumber,"vehicleType":vehicleType}
   
  //  const[role,setRole]=useState('');
  const role='DRIVER'
   // States for checking the errors
   const [submitted, setSubmitted] = useState(false);
   const [error, setError] = useState(false);
  
   // Handling the name change
   const handleName = (e) => {
     setName(e.target.value);
     setSubmitted(false);
   };
   const handleMobile = (e)=>{
     setMobile(e.target.value);
     setSubmitted(false);
   }
  
   // Handling the email change
   const handleEmail = (e) => {
     setEmail(e.target.value);
     setSubmitted(false);
   };
  
   // Handling the password change
   const handlePassword = (e) => {
     setPassword(e.target.value);
     setSubmitted(false);
   };
 
   const handleAadhar = (e)=>{
     setAadhar(e.target.value);
     setSubmitted(false);
   }
 
  //  const handleRole = (e)=>{
  //    setRole(e.target.value);
  //    setSubmitted(false);
  //  }
  
   // Handling the form submission
   const handleCapacity = (e)=>{
    setCapacity(e.target.value);
    setSubmitted(false);
  }

  const handleVehicleName = (e)=>{
    setVehicleName(e.target.value);
    setSubmitted(false);
  }
  const handleVehicleNumber = (e)=>{
    setVehicleNumber(e.target.value);
    setSubmitted(false);
  }
  const handleVehicleType = (e)=>{
    setVehicleType(e.target.value);
    setSubmitted(false);
  }



 const handleSubmit = (e) => {
     e.preventDefault();
     if (name === '' || mobileNumber===''||  email === ''  || aadhar ==='' || password === ''|| role==='' 
     || capacity==='' || vehicleName===''|| vehicleNumber==='' || vehicleType === '' ) {
       setError(true);
     } else {
         axios.post('http://localhost:9050/user/add_user',{
             name,
             mobileNumber,
             email,
             aadhar,
             password,
             role,
             driverDto
            //  capacity,
            //  vehicleName,
            //  vehicleNumber,
            //  vehicleType

             
 
         }).then(res=>console.log('posting data',res)).catch(err=> console.log(err))
       setSubmitted(true);
       setError(false);
     }
   };
 
 
  
   // Showing success message
   const successMessage = () => {
     return (
       <div
         className="success"
         style={{
           display: submitted ? '' : 'none',
         }}>
         <h1>Driver {name} successfully registered!!</h1>
       </div>
     );
   };
  
   // Showing error message if error is true
   const errorMessage = () => {
     return (
       <div
         className="error"
         style={{
           display: error ? '' : 'none',
         }}>
         <h1>Please enter all the fields</h1>
       </div>
     );
   };
  


    return (
      <MDBContainer fluid className='p-4' >
  
        <MDBRow>
  
          <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
  
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              The best offer <br />
              <span className="text-primary">for your business</span>
            </h1>

            <img className='logo' src={signup}  alt="Ezride"  style={{height:'600px' ,width:'550px'}} />
  
            <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
              Easy ride makes travelling easier , signup and enjoy easy travelling
            </p>
  
          </MDBCol>
  
          <MDBCol md='6'>
          <br/><h1> Driver Signup </h1><br/>
  {/* Calling to the methods */}
  <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      
            <MDBCard className='my-5' >
             
              <MDBCardBody className='p-5'>
              <form onSubmit={handleSubmit}>
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4'  onChange={handleName} value={name}   placeholder='Name' id='form1' type='text'/>
                  </MDBCol>
                </MDBRow>
  
             
                <br/>   <MDBInput wrapperClass='mb-4' onChange={handleMobile} value={mobileNumber}  placeholder='Mobile No' id='form1' type='text'/>     
                <br/> <MDBInput wrapperClass='mb-4' onChange={handleEmail} value={email} placeholder='Email' id='form1' type='email'/>
                <br/> <MDBInput wrapperClass='mb-4' onChange={handleAadhar} value={aadhar} placeholder='Aadhar No' id='form1' type='text'/>
                <br/> <MDBInput wrapperClass='mb-4' onChange={handlePassword} value={password} placeholder='Password' id='form1' type='password'/>
                {/* <br/> <MDBInput wrapperClass='mb-4' onChange={handleRole} value={role} placeholder='Role'  id='form1' type='role'/> */}
                <br/> <MDBInput wrapperClass='mb-4' onChange={handleCapacity} value={capacity} placeholder='capacity' id='form1' type='text'/>
                <br/> <MDBInput wrapperClass='mb-4' onChange={handleVehicleName} value={vehicleName} placeholder='Vehicle Name' id='form1' type='text'/>
                <br/> <MDBInput wrapperClass='mb-4' onChange={handleVehicleNumber} value={vehicleNumber} placeholder='Vehicle Number' id='form1' type='number'/>
                <br/> <MDBInput wrapperClass='mb-4' onChange={handleVehicleType} value={vehicleType} placeholder='Vehicle Type' id='form1' type='text'/>
  
                <br/> <MDBBtn className='w-100 mb-4' size='md' type="submit">sign up</MDBBtn>
  
               
                </form>
              </MDBCardBody>
             
            </MDBCard>
  
          </MDBCol>
  
        </MDBRow>
  
      </MDBContainer>
    
    );
  }
  
  
  
  export default Driversignup