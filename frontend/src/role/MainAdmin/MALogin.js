import React from 'react'
import './middlespace.css'

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



function MALogin() {

   
    const notify = () => {
        toast.success('Login successful', {
            position: toast.POSITION.TOP_RIGHT
            
        });

    };
    

    const[email,setEmail]= useState('');
const[password,setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        if(sessionStorage.getItem('user-info')){
            navigate('/ma_login ')
        }
    },[])

   async function login(){


        console.warn(email,password);

        let item ={email,password};
        let result = await fetch("http://localhost:9050/login/get_user",{
            method:'POST',
            headers :{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)

        });
        result =await result.json();
        sessionStorage.setItem("user-info",JSON.stringify(result))
        setTimeout(function abc(){
            navigate('/ma_dashboard')
        },2000)
        
        
    }

  
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
<div><h1>Main Admin Login Page</h1></div><br/>
      <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email' onChange={(e)=>setEmail(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password'  onChange={(e)=>setPassword(e.target.value)} />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>
{/* 
      <MDBBtn className="mb-4"  onClick={()=>{ login()
        }}  >Sign in</MDBBtn> */}

        <button className='btn btn-primary' onClick={()=>{ login();
        notify() }} >Login </button>
   
      {/* <Link to="/customer_dashboard" className="btn btn-primary btn-lg">Log in</Link><br/><br/> */}
     
      <div className="text-center">
        <p>Not a member? <a href="/cust_signup">Signup</a></p>
        <p>or sign up with:</p>

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

        </div>
        <ToastContainer />
      </div>
     
    </MDBContainer>
  );
}

export default MALogin;