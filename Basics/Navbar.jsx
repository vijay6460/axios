import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div>
      <nav style={{color:"white",background:'black',padding:20}}>
      <a href='#'>Home</a>
      <a href='#'>About</a>
      <a href='#'>Contact</a>
      <a href='#'>Blog</a>
      <button className="btn btn-primary">Login</button>
      <button className="btn btn-success">Register</button>
      
      </nav>
      
      
      </div>
    )
  }
}

export default Navbar