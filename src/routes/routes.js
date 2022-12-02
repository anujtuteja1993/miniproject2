import React, { } from 'react';
import { Routes, Route } from 'react-router-dom';
import Recommended from '../components/Recommended/Recommended';
import Genre from '../components/Genre/Genre';
import Navbar from '../components/Navbar/Navbar'


export const AppRoutes = (props) => {
  return (

    <Routes>
        <Route exact path='/recommended' element={<Recommended {...props} />} />
        <Route exact path='/genre' element={<Genre {...props} />} />
        {/* <Route exact path='/gamedetail' element={<GameDetail {...props} />} /> */}
</Routes>
  )
}