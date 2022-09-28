import React from "react";
import { ButtonGroup, Card, Table } from 'react-bootstrap';
import axios from "axios";



class DriverList extends React.Component{

    constructor(props){
       super(props)
        this.state={

            drivers:[]
        }
    }

    componentDidMount(){
      axios.get("http://localhost:9050/main_admin/get_all_drivers")
      .then(response => response.data)
      .then((data)=>{
          this.setState({drivers:data});
      });
  };

  deleteAccount = (id)=>{
    axios.delete(`http://localhost:9050/main_admin/delete_driver/${id}`)
    .then(response=>alert(response.data))
    this.setState({
        drivers: this.state.drivers.filter(driver => driver.id !== id)
    })
};

    render (){
        return(
     <div>
 <h1 className = "text-center"> Driver List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> User Id</td>
                            <td> User Name</td>
                            <td> User Mobile No.</td>
                            <td> User Email Id</td>
                            <td> Role</td>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.drivers.map(
                                driver => 
                                <tr key = {driver.id}>
                                     <td> {driver.id}</td>   
                                     <td> {driver.name}</td>   
                                     <td> {driver.mobileNumber}</td>   
                                     <td> {driver.email}</td>   
                                     <td> {driver.role}</td>  
                                     <td>
                                    <ButtonGroup>
                                    <button onClick={this.deleteAccount.bind(this,driver.id)}>Delete</button>
                                    {/* {driver.id} */}
                                    </ButtonGroup>

                                </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
     </div>

        )
    }

}

export default DriverList