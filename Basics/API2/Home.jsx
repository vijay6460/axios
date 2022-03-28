import axios from 'axios'
import React, { Component } from 'react'
class Home extends Component {
    state={
         user:[]
      }
    
    userhandle=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            // console.log("Url is there")
            this.setState({user:response.data})
        })
        .catch(()=>{
            console.log("No-data")
        })
    }
  render() {
    return (
      <div>
     
      <h4>This is for the Home page</h4>
      <pre>{JSON.stringify(this.state.user)}</pre>
      <button onClick={this.userhandle}>Button</button>
<table className='table table-hover'>
<thead>
<tr>
<th>Userid</th>
<th>id</th>
<th>title</th>
<th>body</th>
</tr>
<tbody>
{this.state.user.map((m)=>{
    return <tr>
    <td>{m.userId}</td>
    <td>{m.id}</td>
    <td>{m.title}</td>
    <td>{m.body}</td>
    </tr>
})}


</tbody>

</thead>

</table>


      </div>

    )
  }
}

export default Home