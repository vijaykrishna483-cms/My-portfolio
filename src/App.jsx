import React from 'react'
import Profile from './Components/Profile/Profile'
import Exp from './Components/Exp/Exp'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import Projectpage from './Components/Projects/project'
const App = () => {
  return (
    <div>
     <Profile/>
     <Exp/>
     <Experience/>
     <About/>
     {/* <Projectpage/> */}
     <Contact/>
    </div>
  )
}

export default App
