import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <div>
      <Link to="Home">Home</Link>
      <Link to="About">About</Link>
      </div>
    )
  }
}

export default Navbar