import React from 'react'
import { Link, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub, faWhatsapp} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className='m-0 p-0 w-100'>

      <div >

        <div className='bg-mate p-5 rounded-bottom border-top border-secondary text-center'>

          <p className='text-light fs-5'>Have a project in mind
            <span className='d-block fs-1 fw-bolder text-purple my-2' style={{fontFamily:'FreeMono'}}>Let me help you</span>
          </p>

          <button className='btn btn-light px-4 py-2  rounded-pill'
          onClick={()=>
            window.open('https://api.whatsapp.com/send?phone=212640610072', '_blank')
          }
          >Contact Me</button>

        </div>

      <div className='text-center bg-mate p-5 pt-3 '>
        <p className='fs-5 fw-bold '>
            <span className='pb-4 d-block fs-1 fw-bold text-center text-warning my-3 '>Abdelhakim Outass</span>
            A freelance web designer and developer make websites that have unique designs and also has a good performance rate.
          </p>
      </div>
                        
        <div className='bg-mate p-5 pt-3 m-0 d-flex flex-column flex-md-row justify-content-around align-items-start gap-4'>

            <ul className='nav d-block border-start border-warning ps-3 '>
              
              <li><p className='fs-4 fw-bolder fw-bold text-light '>Important Links</p></li>

               <li className='nav-item pb-1'>
                  <Link to="/" className='text-decoration-none text-purple fw-bold'>HOME</Link>
               </li>

               <li className='nav-item pb-1'>
                  <Link to="/Projects" className='text-decoration-none text-purple fw-bold'>Projects</Link>
               </li>

               <li className='nav-item '>
                  <Link to="/About" className='text-decoration-none text-purple fw-bold'>ABOUT</Link>
               </li>

              
            </ul>


            <ul className='nav d-block border-start border-warning ps-3 '>

              <li><p className='fs-4 fw-bolder fw-bold text-light'>Contact Info</p></li>
              
              <li className='nav-item'>
                  <a href='https://api.whatsapp.com/send?phone=212640610072'
                  target='_blank'
                  rel='nooper noreferrer'
                  className='text-decoration-none text-purple fw-bold '
                  >
                <FontAwesomeIcon icon={faWhatsapp} className='me-2'/>
                     CONTACT
              </a>
               </li> 

              <li className='py-1'>
                  <a href="tel:+212640610072" 
         className='text-decoration-none text-purple '>
            <FontAwesomeIcon icon={faPhoneVolume} className='me-2'/>
            +212 640610072
         </a>
               </li>

              <li >
                <a href="mailto:outasabdelhakim@gmail.com" target="_blank" rel="noopener noreferrer"
                className='text-decoration-none text-purple fw-bold'>
                  outasabdelhakim@gmail.com
                </a>
              </li>
            </ul>

            <ul className='nav d-block border-start border-warning ps-3 '>
              <li><p className='fs-4 fw-bolder fw-bold text-light'>Social Links</p></li>
            
              <li>  
                <a href="https://github.com/Abdelhakimeee" target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faGithub} className='text-purple fs-4 me-2'/>
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/abdelhakim-outass-5b2b75284" target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='text-purple fs-4 me-2'/>
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/outass1/" target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faInstagram} className='text-purple fs-4 me-2'/>
                </a>
              </li>

              <li>  
                <a href="https://web.facebook.com/people/%D8%B1%D9%88%D8%A7%D9%82-%D9%86%D9%88%D8%B1%D8%A9/61582447383574/" target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faFacebook} className='text-purple fs-4 me-2'/>
                </a>
              </li>
            

            </ul>

        </div>
        <p className='py-1 px-5 m-0 w-100 text-light bg-dark small text-start'>@ Abdelhakim Outass | React Developer</p>

      </div>
    </footer>
  )
}

export default Footer
