

import { useState ,useEffect} from 'react';
import axios from 'axios'   
import { Table} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import BookRide from './BookRide';

 
 function FindRide() {

  let navigate =useNavigate();
  const [active,setActive]= useState("Profile")
  
  //load customer data 
  const user= JSON.parse(sessionStorage.getItem("user-info"));

   
  const [rid,setRid] = useState('');

  // States for registration
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const [date, setDate] = useState('');
 
 
  
  
 
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
 
  


 
  // Handling the form submission
    async function handleSubmit(e){
    // e.preventDefault();
    if (source === '' || destination===''||  date === '' ) {
      setError(true);
    } else {
    
         axios.post('http://localhost:9050/customer/get_rides',{
            source,
            destination,
            date
           

        }).then(res => {console.log('posting data' ,res)
        sessionStorage.setItem('rides',JSON.stringify(res.data))
        setTimeout(function showRides(){
          navigate('/book_ride')
           
          },10)
              
      })
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
    <div className="form">
      <div>
        <h1>Find Rides</h1>
        
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      
    <Table border={1} cellSpacing={0} cellPadding={8}>
      
        {/* Labels and inputs for form data */}
        <tbody>
        <tr>
            <td>
        <label className="label">Source</label>
        </td>
        <td>
        <input onChange={handleSource} className="input"
          value={source} type="text" /> 
        </td>
        </tr>

        <tr>
            <td>
        <label className="label">Destination</label> 
            </td>
       
        <td> <input onChange={handleDestination} className="input"
          value={destination} type="text"/> 
        </td>
        </tr>

        <tr>
            <td>
        <label className="label">Date</label>
        </td>
        <td>
        <input onChange={handleDate} className="input"
          value={date} type="date" /> 
          </td>
        </tr>
        
        
        
       
        </tbody>
        </Table>
        
        <button className="btn" type="submit" onClick={()=>{handleSubmit();
                                                                         }}>
          Search
        </button>

        <br/><br/>

         
        
        <div>
        {/* <button className="btn" onClick={()=>{navigate('/customer/previous_rides')}}>
          Previous Rides
        </button> */}

        {/* {active === "BookRide" && <BookRide/>} */}
    
            
        </div>
      

       
      
    </div>
  );
      }

export default FindRide;


    