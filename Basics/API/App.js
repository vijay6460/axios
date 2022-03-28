import React, { Component } from 'react'
import Home from './Pro/Basics/API/Home'
import Navbar from './Pro/Basics/API/Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path="Home" element={<Home/>}/>
      </Routes>
      </Router>
      </div>
    )
  }
}
export default App
