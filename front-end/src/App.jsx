// Add my experience in sellse (seller , getion , cloth ...  )  in About.jsx

//  todo : front-end/src/pages/Home.scss     
// todo : make a media query for the home page  to make it responsive 
// todo : try to style page less than 800  with media query 
// 1 potho,  2 nave bar font size , 
// in footer مسافة بين المحتوى  in @query  phon ... + add footer .scss
// TopProjext 
// Hire Me 
// 

import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// dd
import TopProject from './components/TopProject'; 
import Skiles from './components/Skiles';
// dd


function App() {
  return (
    <div className="App bg-mate text-purple mb-0 pb-0">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />  
          <Route path='/Home' element={<Home />} /> 
          <Route path='/Contact' element={<Contact />} />  
          <Route path='/About' element={<About />} />  
          <Route path='/Projects' element={<Projects />} /> 
          
          {/* dd */}
          <Route path='/TopProject' element={<TopProject />} /> 
          <Route path='/Skiles' element={<Skiles />} />

          {/* <Route .... */}

        </Routes>

        <Footer />
      </BrowserRouter>  

      </div>  
        )
}

export default App

