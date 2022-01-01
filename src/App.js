import React from 'react';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/home' exact element={<Home/>} />
    <Route path='/about' exact element={<About/>} />
 <Route  path='/*'  element={<NotFound/>} />
   </Routes>
  </BrowserRouter>
  );
}

export default App;
