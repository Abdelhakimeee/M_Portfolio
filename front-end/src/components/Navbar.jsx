import React from 'react';
import { Link, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTelegram } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
  return (
     <nav className='p-3'>
        <div className='container d-flex justify-content-between align-items-center bg-mate text-purple'>

         <img src="/logo.png" alt="logo image"
         className='ms-5 img-fluid' style={{ width: "80px", height: "80px", borderRadius: '50%'}}
         ></img>

         <div className="align-items-center shadow-sm ">
            <ul className='nav justify-content-center '>

               <li className='nav-item px-4'>
                  <Link to="/" className='text-decoration-none text-purple fw-bold'>HOME</Link>
               </li>

               

               <li className='nav-item px-4'>
                  <Link to="/Projects" className='text-decoration-none text-purple fw-bold'>Projects</Link>
               </li>

               <li className='nav-item px-4'>
                  <Link to="/" className='text-decoration-none text-purple fw-bold'>ABOUT</Link>
               </li>

               <li className='nav-item px-4'>
                  <a href='https://api.whatsapp.com/send?phone=212772326384'
                  target='_blank'
                  rel='nooper noreferrer'
                  className='text-decoration-none text-purple fw-bold '
                  >
                     CONTACT
                  </a>
               </li> 

               <li className='px-5'>
                  <a href="tel:+212772326384" 
         className='text-decoration-none text-purple d-flex align-items-center gap-3'>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <strong>+212 772326384</strong>
         </a>
               </li>

            </ul>
         </div>

         
        </div>
     </nav>
  )
}
export default Navbar
