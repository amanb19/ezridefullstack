import React from "react";

import axios from "axios";



class RideList extends React.Component{

    constructor(props){
       super(props)
        this.state={

            rides:[]
        }
    }

    componentDidMount(){
      axios.get("http://localhost:9050/main_admin/get_all_rides")
      .then(response => response.data)
      .then((data)=>{
          this.setState({rides:data});
      });
  };

    render (){
        return(
     <div>
 <h1 className = "text-center"> All Ride List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Ride Id</td>
                            <td> Capacity</td>
                            <td>Charges</td>
                            <td> Date</td>
                            <td> Destination</td>
                            <td>Source </td>
                            <td> Time</td>
                           
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.rides.map(
                                ride => 
                                <tr key = {ride.id}>
                                     <td> {ride.id}</td>   
                                     <td> {ride.capacity}</td>   
                                     <td> {ride.charges}</td>   
                                     <td> {ride.date}</td>   
                                     <td> {ride.destination}</td>  
                                     <td> {ride.source}</td> 
                                     <td> {ride.time}</td> 
                                    
                                </tr>
                            )
                        }

                    </tbody>
                </table>
     </div>

        )
    }

}

export default RideList