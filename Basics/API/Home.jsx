import React, { Component } from 'react'
import axios from 'axios'
class Home extends Component {
   
    state = {
            user: [],
        
    }
    getuserdata = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data)
                console.log("Hello world")
                this.setState({user:response.data})
            })
            .catch((err) => {
                // console.log(err)
                // console.log("no url")
            })
    }
    render() {
        return (
            <div>
                <h4>This is for the Home Component</h4>
                <pre>{JSON.stringify(this.state.user)}</pre>
                <button onClick={this.getuserdata}>Submit</button>
                <table className='table table-hover'>
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>email</th>
                    </tr>
                </thead>
                <tbody>
                   {this.state.user.map((e) => {
                        return <tr> 
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                </tr>
                    })} 
                </tbody>

            </table>

                           </div>
        )
    }
}
export default Home