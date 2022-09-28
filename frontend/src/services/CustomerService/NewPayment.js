import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NewPayment() {

    const navigate = useNavigate();
    const random = Math.floor(100000 + Math.random() * 900000);
    const [otp, setOtp] = useState('');

    const handleOtp = (e) =>{
        setOtp(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(otp.localeCompare(random.toString())){
            console.warn("Correct Otp");
            navigate('/customer/payment')
            
        }else{
            console.warn("Wrong Otp,Please try again");
            console.log(otp);
            navigate("/")
        }
    }

    



  return (
    // <div>
    //     <label>Send otp</label>
    //     <button onClick={sendOtp}>Send</button>
        <div>
            <label>Enter Otp </label>
            <input type="number" value={otp} onChange={handleOtp}></input>
            <button onClick={handleSubmit}>Verify Otp</button>
            
        </div>
   
  )
}

export default NewPayment