import React, { useEffect, useState } from 'react'

function DriverProfile() {

    const user = JSON.parse(sessionStorage.getItem('driver-info'))
    const [name,setname] = useState('');
    // const [email,setEmail] = useState('');
    const [mobileNumber,setMobile] = useState('');
    // const [aadhar,setAdhar] = useState('');
    const [vehicleNumber,setVehicleNo] = useState('');
    const [vehicleName,setVehicleName] = useState('');
    const [vehicleType,setVehicleType] = useState('');
    const [did,setDid] = useState('');
    const [uid,setUid] = useState('');

    useEffect(()=>{
        getUser();
    },[])

    function getUser(){
        setname(user.name);
        // setEmail(user.email);
        setMobile(user.mobileNumber);
        // setAdhar(user.aadhar);
        setVehicleNo(user.vehicleNo);
        setVehicleName(user.vehicleName);
        setVehicleType(user.vehicleType);
        setDid(user.did);
        setUid(user.did);
    }

    function updateUser(){
        let newuser = {did,name,mobileNumber,vehicleNumber,vehicleName,vehicleType,uid}
        console.warn("Updated User : ", newuser);
        fetch(`http://localhost:9050/driver/update_profile/${user.uid}`,{
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
            {/* Email : <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br /><br /><br /> */}
            Mobile : <input type="text" value={mobileNumber} onChange={(e)=>{setMobile(e.target.value)}}></input><br /><br /><br />
            {/* adhar : <input type="text" value={aadhar} onChange={(e)=>{setAdhar(e.target.value)}}></input><br /><br /><br /> */}
            Vehicle No : <input type="text" value={vehicleNumber} onChange={(e)=>{setVehicleNo(e.target.value)}}></input><br /><br /><br />
            Vehicle Name : <input type="text" value={vehicleName} onChange={(e)=>{setVehicleNo(e.target.value)}}></input><br /><br /><br />
            Vehicle Type : <input type="text" value={vehicleType} onChange={(e)=>{setVehicleNo(e.target.value)}}></input><br /><br /><br />
            <button onClick={updateUser}>Update</button>

            
        </div>
    </div>
  )
}

export default DriverProfile