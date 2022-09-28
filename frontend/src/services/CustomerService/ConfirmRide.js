import React from 'react'
import { useNavigate,Link } from "react-router-dom";
const ConfirmRide = () => {



    // const [confirm, setConfirm] = useState('')

    // const handleConfirm = () => {
        
    //         return (
    //           <div
    //             className="success"
    //             >
    //             <h1>Ride booked </h1>
    //           </div>
    //         );
    //       };

    const navigate = useNavigate();



  return (
    <div><h1>Enter code : 123 , to confirm ride </h1>
    
    <input type='text'></input>

    <button className="btn" onClick={()=>{navigate('/ride_booked')}}>Confirm</button>
    
    
    
    </div>
  )
}

export default ConfirmRide