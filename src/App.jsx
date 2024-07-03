import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gym from './pages/Gym';
import Track from './pages/Track';
import Footer from './components/Footer';


function App() {
 

  return (
    <>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/gym" element={<Gym/>}/>
         <Route path="/track" element={<Track/>}/>
       </Routes>
       <Footer/>
    </>
  )
}

export default App
