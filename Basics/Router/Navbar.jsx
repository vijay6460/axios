import React from "react";
import {Link } from 'react-router-dom'
class Navbar extends React.Component{
  render(){
    return(
      <div>
      <Link to="Contact">Contact</Link>
      <Link to="About">About</Link>
      <Link to="Blog">Blog</Link>
      <Link to="Info">Info</Link>
      
      
      </div>
    )
  }

}
export default Navbar