import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Service from './Service'

import Homepage from './Homepage'
import Login from './Login'
import Signup from './Signup'
import Pricing from './Pricing'
import VideoCreationPage from './VideoCreationPage'
import VideoViewerPage from './VideoViewerPage'
import About from './About'
import Products from './Products'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/service' element={<Service/>} />
       <Route path='/about' element={<About/>} />
        <Route path='/videocreation' element={<VideoCreationPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path='/videoviewer'element={<VideoViewerPage/>}/>
        <Route path='/pricing'element={<Pricing/>}/>
         <Route path='/products'element={<Products/>}/>
    </Routes>
  )
}

export default AllRoutes;