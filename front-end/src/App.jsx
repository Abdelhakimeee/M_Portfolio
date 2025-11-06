import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-mate text-purple mb-0 pb-0">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />  
          {/* <Route .... */}

        </Routes>

        <Footer />
      </BrowserRouter>  

      </div>  
        )
}

export default App

