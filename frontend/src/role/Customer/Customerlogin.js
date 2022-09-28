import React from 'react';
import {useState,useEffect} from "react";
import { useNavigate,Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { FaInfo } from 'react-icons/fa';
import UserList from '../../services/AdminService/CustomerList';



function Customerlogin() {



   
    const notify = () => {
        toast.success('Login successful', {
            position: toast.POSITION.TOP_RIGHT
            
        });

    };
    

    const[email,setEmail]= useState('');
const[password,setPassword] = useState('');


  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [wrong, setWrong] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e)=>{
    setPassword(e.target.value);
    setSubmitted(false);
  }
 
  const logout = () =>{

    sessionStorage.clear()

  }
 

    const navigate = useNavigate();

    useEffect(()=>{
        if(sessionStorage.getItem('user-info')){
            navigate('/customer_dashboard ')
        }
    },[])

    let invalid=sessionStorage.getItem('user-info')


   async function login(req,res){

    

    if (email === '' || password==='' ) {
      setError(true);
    }
    else{

        console.warn(email,password);
        
       
        let item ={email,password};
        let result = await fetch("http://localhost:9050/login/customerLogin",{
            method:'POST',
            headers :{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)

        });
        result =await result.json();
        sessionStorage.setItem("user-info",JSON.stringify(result))



        // {invalid.message==="User not found"?navigate('/home'):navigate('/about')}


        // below  not working
                //  if(invalid.message==="User not found"){
                //   navigate('/home')
                //  }

                //below not working
        // if(invalid.status=="500")
        // { 
        //  { logout() }
        //            navigate('/home')
        //   notify()
         
        // }
        // else{
        setTimeout(function abc(){
            navigate('/customer_dashboard')
        },10)
        
        .catch(err=> console.log(err))
        setSubmitted(true);
        setError(false);
      
    };}



// Showing success message
const successMessage = () => {
  return (
    <div
      className="success"
      style={{
        display: submitted ? '' : 'none',
      }}>
      <h1></h1>
    </div>
  );
};

// Wromg Email or pass message
const wrongMessage = () => {
  return (
    <div
      className="wrong"
      style={{
        display: wrong ? '' : 'none',
      }}>
      <h1>Wrong email or password</h1>
    </div>
  );
};

//Showing error message if error is true
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


    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
<div><h1>Customer Login Page</h1></div><br/>

<div className="messages" style={{color :'skyblue'}}>
        {errorMessage()}
        {wrongMessage()}
        {successMessage()}
      </div>


      <br/><br/><br/><MDBInput wrapperClass='mb-4'  onChange={handleEmail} placeholder='Email address' id='form1' type='email' />
      <MDBInput wrapperClass='mb-4'  onChange={handlePassword} placeholder='Password' id='form2' type='password' />
      
      {/* <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div> */}
{/* 
      <MDBBtn className="mb-4"  onClick={()=>{ login()
        }}  >Sign in</MDBBtn> */}

        <button className='btn btn-primary' onClick={()=>{ login();
         }} >Login </button>
   
      {/* <Link to="/customer_dashboard" className="btn btn-primary btn-lg">Log in</Link><br/><br/> */}
     
      <div className="text-center">
        <p>Not a member? <a href="/customer_signup">Signup</a></p>
        {/* <p>or sign up with:</p> */}
{/* 
        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div> */}
        <ToastContainer />
      </div>
     
    </MDBContainer>
  );
}

export default Customerlogin;