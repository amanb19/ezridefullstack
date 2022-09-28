import React, { useEffect, useState } from 'react'

function CustomerProfile() {

    const user = JSON.parse(sessionStorage.getItem('user-info'))
    const [name,setname] = useState('');
    const [email,setEmail] = useState('');
    const [mobileNumber,setMobile] = useState('');
    const [aadhar,setAdhar] = useState('');
    
    const [did,setDid] = useState('');
    const [uid,setUid] = useState('');

    useEffect(()=>{
        getUser();
    },[])

    function getUser(){
        setname(user.name);
        setEmail(user.email);
        setMobile(user.mobileNumber);
        setAdhar(user.aadhar);
  
        setDid(user.did);
        setUid(user.did);
    }

    function updateUser(){
        let newuser = {did,name,mobileNumber,email,aadhar,uid}
        console.warn("Updated User : ", newuser);
        fetch(`http://localhost:9050/customer/update_profile/${user.uid}`,{
          method:'PUT' ,
          headers:{
            "Content-Type":"application/json",
              "Accept":'application/json'
          },
          body:JSON.stringify(newuser)
      })
    }

  return (
    <div>
        <div>
            <br />
            Name : <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}></input><br /><br /><br />
            Email : <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br /><br /><br />
            Mobile : <input type="text" value={mobileNumber} onChange={(e)=>{setMobile(e.target.value)}}></input><br /><br /><br />
            Adhar : <input type="text" value={aadhar} onChange={(e)=>{setAdhar(e.target.value)}}></input><br /><br /><br />
           
            <button onClick={updateUser}>Update</button>

            
        </div>
    </div>
  )
}

export default CustomerProfile