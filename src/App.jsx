import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Food from './pages/Food'
import Tourism from './pages/Tourism'
import Hotels from './pages/Hotels'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Food' element={<Food/>}/>
        <Route path='/Tourism' element={<Tourism/>}/>
        <Route path='/Hotels' element={<Hotels/>}/>
      </Routes>
    </Router>
  );
}

export default App;
