import React from "react";

import axios from "axios";



class UserList extends React.Component{

    constructor(props){
       super(props)
        this.state={

            users:[]
        }
    }

    componentDidMount(){
      axios.get("http://localhost:9050/user/get_user")
      .then(response => response.data)
      .then((data)=>{
          this.setState({users:data});
      });
  };

    render (){
        return(
     <div>
 <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> User Id</td>
                            <td> User Name</td>
                            <td> User Mobile No.</td>
                            <td> User Email Id</td>
                            <td> Role</td>
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