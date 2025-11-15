import React from 'react';
import { Link, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
// import './Navbar.css';


function Navbar() {
  return (
     <nav className='navbar navbar-expand-lg p-3 '>
        <div className='container'>

         <a href="/" className='navbar-brand'>
           <img src="/logo.png" alt="logo"
               className='ms-5 img-fluid ' style={{ width: "80px", height: "80px", borderRadius: '50%'}}
            />
           </a>

           {/* Toggle button للشاشات الصغيرة */}
           <button
      className="navbar-toggler bg-secondary rounded-circle me-5 "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navMenu"
      aria-controls="navMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon  "></span>
    </button>

         {/*  with sm screen   */}
         <div className="collapse d-lg-none " id="navMenu" >
            <ul className='navbar-nav ms-auto '>

               <li className='nav-item px-4'>
                  <Link to="/" className='text-decoration-none text-purple fw-bold'>HOME</Link>
               </li>

               

               <li className='nav-item px-4'>
                  <Link to="/Projects" className='text-decoration-none text-purple fw-bold'>Projects</Link>
               </li>

               <li className='nav-item px-4'>
                  <Link to="/About" className='text-decoration-none text-purple fw-bold'>ABOUT</Link>
               </li>

               <li className='nav-item px-4'>
                  <a href='https://api.whatsapp.com/send?phone=212640610072'
                  target='_blank'
                  rel='nooper noreferrer'
                  className='text-decoration-none text-purple fw-bold '
                    >
                       <FontAwesomeIcon icon={faWhatsapp} className='me-2' />
                     CONTACT
                  </a>
               </li> 

               <li className='px-4 me-5'>
                  <a href="tel:+212640610072" 
         className='text-decoration-none text-purple '>
            <FontAwesomeIcon icon={faPhoneVolume} className='me-2' />
            +212 640610072
         </a>
               </li>

            </ul>
           </div>

           {/*  with lg screen   */}
           <div className=" d-none d-lg-block"  >
            <ul className='navbar-nav ms-auto '>

               <li className='nav-item px-4'>
                  <Link to="/" className='text-decoration-none text-purple fw-bold'>HOME</Link>
               </li>

               

               <li className='nav-item px-4'>
                  <Link to="/Projects" className='text-decoration-none text-purple fw-bold'>Projects</Link>
               </li>

               <li className='nav-item px-4'>
                  <Link to="/About" className='text-decoration-none text-purple fw-bold'>ABOUT</Link>
               </li>

               <li className='nav-item px-4'>
                  <a href='https://api.whatsapp.com/send?phone=212640610072'
                  target='_blank'
                  rel='nooper noreferrer'
                  className='text-decoration-none text-purple fw-bold '
                    >
                       <FontAwesomeIcon icon={faWhatsapp} className='me-2' />
                     CONTACT
                  </a>
               </li> 

               <li className='px-4 me-5'>
                  <a href="tel:+212640610072" 
         className='text-decoration-none text-purple '>
            <FontAwesomeIcon icon={faPhoneVolume} className='me-2' />
            +212 640610072
         </a>
               </li>

            </ul>
         </div>
           


         
        
        </div>
           
     </nav>
  )
}
export default Navbar
