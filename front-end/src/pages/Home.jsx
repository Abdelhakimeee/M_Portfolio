import React from 'react';
import { Link, } from 'react-router-dom';
import TopProject from '../components/TopProject';
import Skiles from '../components/Skiles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faFacebook, faInstagram,
  faGithub, faLinkedin, faWhatsapp
} from '@fortawesome/free-brands-svg-icons';



function Home() {
  return (
    <div className='bg-mate '>
      
      <div className='user-home d-flex flex-column flex-lg-row justify-content-around align-items-center py-5 ' >   
       
        

        <div className='p-3 text-center text-lg-start' >
          <p className='fs-4'>Hello, I'm
          <span className='d-block text-light fs-1 fw-bolder'>ABDELHAKIM <br/> OUTASS </span>
          Software Developer
          </p>

          {/* stytim of icons in same lign ...
            
               */}
          <ul className='d-flex text-center '>
              
                <a href="https://github.com/Abdelhakimeee" target='_blank' rel='noopener noreferrer'>
                   <FontAwesomeIcon icon={faGithub} className='text-warning fs-3 ps-0 py-4 px-3 '/>
                </a>
             
                <a href="https://www.linkedin.com/in/abdelhakim-outass-5b2b75284" target='_blank' rel='noopener noreferrer'>
                   <FontAwesomeIcon icon={faLinkedin} className='text-warning fs-3 py-4 px-3'/>
                </a>
              
            
              
                {/* <a href="https://www.instagram.com/outass1/" target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faInstagram} className='text-warning fs-3 py-4 px-3'/>
                </a> */}
              
             
                {/* <a href="https://web.facebook.com/people/%D8%B1%D9%88%D8%A7%D9%82-%D9%86%D9%88%D8%B1%D8%A9/61582447383574/" target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faFacebook} className='text-warning fs-3 py-4 px-3'/>
                </a> */}
                
                <a href="https://api.whatsapp.com/send?phone=212640610072" target='_blank' rel='noopener noreferrer'>
                   <FontAwesomeIcon icon={faWhatsapp} className='text-warning fs-3 py-4 px-3 '/>
                </a>
           
          </ul>
          
          <Link to="/Contact" className="btn btn-outline-warning px-5 py-2  fw-bold rounded-pill custom-btn text-warning text-decoration-none">
            Hire Me
          </Link>

          <Link to="/Projects" className="btn btn-outline-warning px-4 py-2 ms-3 fw-semibold rounded-pill custom-btn text-warning text-decoration-none">
            See My Projects
          </Link>

        </div>


        <img src='/homeimg.jpg' alt="home img"   
          className='img-fluid border-end border-bottom border-warning mt-4 mt-lg-0'   style={{width: "80%",maxWidth:'450px', height: "auto", borderRadius: "2%", }}
        ></img>

      </div>

          {/* 2  top 5 project  # example projext top 5 --- */}
      <TopProject />
      {/* <Skiles /> */}
      
      



    </div>

    
  )
}

export default Home