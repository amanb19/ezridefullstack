import React from "react";
import { ButtonGroup, Card, Table } from 'react-bootstrap';
import axios from "axios";



class UserList extends React.Component{

    constructor(props){
       super(props)
        this.state={

            users:[]
        }
    }

    componentDidMount(){
      axios.get("http://localhost:9050/main_admin/get_all_customer")
      .then(response => response.data)
      .then((data)=>{
          this.setState({users:data});
      });
  };

  deleteAccount = (id)=>{
    axios.delete("http://localhost:9050/main_admin/delete_customer/"+id)
    .then(response=>alert(response.data))
    this.setState({
        users: this.state.users.filter(user => user.id !== id)
    })
};

    render (){
        return(
     <div>
 <h1 className = "text-center"> Customer List</h1>
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
                            this.state.users.map(
                                user => 
                                <tr key = {user.id}>
                                     <td> {user.id}</td>   
                                     <td> {user.name}</td>   
                                     <td> {user.mobileNumber}</td>   
                                     <td> {user.email}</td>   
                                     <td> {user.role}</td>  
                                     <td>
                                     <ButtonGroup>
                                    <button onClick={this.deleteAccount.bind(this,user.id)}>Delete</button>
                                    {/* {user.id} */}
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

export default UserList