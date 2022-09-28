import React,{Component } from "react";
import axios from "axios";
import { Table} from "react-bootstrap";
import { Link } from 'react-router-dom';






export default class BookRide extends Component{

     rides;
    user;
    constructor(props){
            super(props);
       
            this.state ={
                ridess:[],
               uid:'',
                seats:'',

            
            };
            this.handleChange = this.handleChange.bind(this);
   
    }
    

    componentDidMount(){
        this.rides =JSON.parse(sessionStorage.getItem('rides'))
        this.setState({ridess:this.rides});
        this.user=JSON.parse(sessionStorage.getItem('user-info'))
        this.setState({uid:this.user.uid})
        
        // const rides = ridess ? sessionStorage.getItem('rides') : '';
        // this.setState({ rides, ridess });
    };
   
  
        // let rides = JSON.parse( sessionStorage.getItem('rides'));
    

   
    confirmride=(id)=>{
       
    axios.post(`http://localhost:9050/customer/book_rides/${id}?customerId=${this.state.uid}&&numberOfSeats=${this.state.seats}`)
        
        .then(res => {console.log('posting data' ,res);
        sessionStorage.setItem('driver',JSON.stringify(res.data));
        sessionStorage.setItem('id',id)
      
        this.setState({
            ridess:this.ridess.filter(ride => ride.id === id)
        })
  
       
           
        });
    }

    handleChange(event) {
        this.setState({seats: event.target.value});
      }

    render(){
        return(


            <div>
                 <Table border={1} cellPadding={8} cellSpacing={0} className="tale1">
            <thead>
                <tr>
               
                <th>Source</th>
                <th>Destination</th>
                <th>Capacity</th>
                <th>date</th>
                <th>Time</th>
                <th>charges</th>
                <th>No. of seats</th>
               
                </tr>
            </thead>

            <tbody>
                    {
                        this.state.ridess.map((ride)=>(
                            <tr key={ride.id}>
                                <td>{ride.source}</td>
                                <td>{ride.destination}</td>
                                <td>{ride.capacity}</td>
                                <td>{ride.date}</td>
                                <td>{ride.time}</td>
                                <td>{ride.charges}</td>
                                <td><input type={"number"} onChange={this.handleChange} value={this.state.seats} /> </td>
                                
                                                               
                                <td>
                                    
                                <Link to = '/confirm_ride'>    
                                  <button onClick={this.confirmride.bind(this,ride.id)}> select </button> </Link> 
                                </td>
                               
                                         
                            </tr>
                        ))
                    }                     

                </tbody>
                


        </Table>
            </div>
        )
    }
}
