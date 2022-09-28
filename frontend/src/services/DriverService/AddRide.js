
import { useState } from 'react';
import axios from 'axios'   
 
export default function AddRide() {
 
    const user=JSON.parse(sessionStorage.getItem("driver-info"));

    let id=user.did;
  // States for registration
  const [source, setSource] = useState('');
const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [charges, setCharges] = useState('');
  const[capacity,setCapacity]=useState('');
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleSource = (e) => {
    setSource(e.target.value);
    setSubmitted(false);
  };
  const handleDestination = (e)=>{
    setDestination(e.target.value);
    setSubmitted(false);
  }
 
  // Handling the email change
  const handleDate = (e) => {
    setDate(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handleTime = (e) => {
    setTime(e.target.value);
    setSubmitted(false);
  };

  const handleCharges = (e)=>{
    setCharges(e.target.value);
    setSubmitted(false);
  }

  const handleCapacity = (e)=>{
    setCapacity(e.target.value);
    setSubmitted(false);
  }
 
  // Handling the form submission
const handleSubmit = (e) => {
    e.preventDefault();
    if (source === '' || destination===''||  date === ''  || time ==='' || charges === '' || capacity === '') {
      setError(true);
    } else {
        axios.post(`http://localhost:9050/driver/add_rides/${id}`,{
            source,
           destination,
            date,
            time,
            charges,
            capacity
            

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
        <h1>Ride successfully registered!!</h1>
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
    <div className="form" style={{color: "black" }}>
      <div>
        <h1>Add Ride</h1><br/><br/>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form onSubmit={handleSubmit}>
    <table>
      
        {/* Labels and inputs for form data */}
        <tr>
            <td>
        <label className="label">Source</label>
        </td>
        <td>
        <input onChange={handleSource} className="input"
          value={source} type="text" /> 
        </td>
        </tr>
        <br/>
        <tr>
            <td>
        <label className="label">Destination</label> 
            </td>
       
        <td> <input onChange={handleDestination} className="input"
          value={destination} type="text"    /> 
        </td>
        </tr>
        <br/>
        <tr>
            <td>
        <label className="label">Date</label>
        </td>
        <td>
        <input onChange={handleDate} className="input"
          value={date} type="date" /> 
          </td>
        </tr>
        
        <br/>

        <tr> 
            <td>
        <label className="label">Time</label>
        </td>
        <td>
        <input onChange={handleTime} className="input"
          value={time} type="time" /> 
          </td>
        </tr>
        <br/>
        <tr>
            <td>
        <label className="label">Charges</label>
        </td>
        <td>
        <input onChange={handleCharges} className="input"
          value={charges} type="number" /> 
          </td>
        </tr>
        <br/>
        <tr>
            <td>
        <label className="label">Capacity</label>
        </td>
        <td>
        <input onChange={handleCapacity} className="input" 
          value={capacity} type="number" /> 
          </td>
        </tr>
        <br/><br/>
        <tr>
            <td>
        <button className="btn btn-primary" style={{width:'200px'}} type="submit">
          Submit
        </button>
        </td>
        </tr>
        
        </table>
        </form>
      
    </div>
  );
}