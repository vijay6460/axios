import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from './Pro/Basics/Router/Contact'
import Blog from './Pro/Basics/Router/Blog'
import About from './Pro/Basics/Router/About'
import Info from './Pro/Basics/Router/Info'
import Navbar from './Pro/Basics/Router/Navbar'
class App extends React.Component{
  render(){
    return(
      <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path='Contact' element={<Contact/>} />
      <Route path='Blog' element={<Blog/>} />
      <Route path='About' element={<About/>} />
      <Route path='Info' element={<Info/>} />
      </Routes>
      </Router>
      </div>
    )
  }
}
export default App