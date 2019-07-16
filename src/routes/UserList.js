import React from 'react';
import axios from 'axios';


class UserList extends React.Component{
    state = {
        users: []
    };

    componentDidMount(){
        axios.get('https://cloudstands-staging.herokuapp.com/userlist')
        .then(res => {
            console.log(res)
            this.setState({
                users: res.data
            })
        })
        .catch(err => console.log(err));
    };

    render(){
        return(
            <div>
                {this.state.users.map(user => {
                return <li>{user.email}</li>
                })} 
            </div>
        )
           
            
    };
};

export default UserList;