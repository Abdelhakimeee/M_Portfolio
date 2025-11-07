import React from 'react'
import { Link, } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className='m-0 p-0 w-100'>

      <div className='bg-secondary '>

        <div className='bg-mate shadow-sm  p-5 mx-4 my-5 rounded-bottom border-top border-secondary text-center'>

          <p className='text-light fs-5'>Have a project in mind
            <span className='d-block fs-1 fw-bolder text-purple'>Let me help you</span>
          </p>

          <button className='btn btn-light px-4 py-2 rounded-pill'
          onClick={()=>
            window.open('https://api.whatsapp.com/send?phone=212772326384', '_blank')
          }
          >Contact Me</button>

        </div>

      <div className='m-0 pt-5 p-2 text-center bg-mate'>
        <p>
            <span className='pb-4 d-block fs-4 fw-bold text-center '>Abdelhakim Outass</span>
            A freelance web designer and developer make websites that have unique designs and also has a good performance rate.
          </p>
      </div>
                        

        <div className='bg-mate  p-5 pt-3 m-0 d-flex justify-content-around align-items-center'>

            <ul className='nav d-block border-start border-warning ps-3 '>
              
              <li><p className='fs-4 fw-bolder fw-bold '>Important Links</p></li>

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

              <li><p className='fs-4 fw-bolder fw-bold'>Contact Info</p></li>
              
              <li className='nav-item'>
                  <a href='https://api.whatsapp.com/send?phone=212772326384'
                  target='_blank'
                  rel='nooper noreferrer'
                  className='text-decoration-none text-purple fw-bold '
                  >
                     CONTACT
                  </a>
               </li> 

              <li className='py-1'>
                  <a href="tel:+212772326384" 
         className='text-decoration-none text-purple d-flex align-items-center gap-1'>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <strong>+212 772326384</strong>
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
              <li><p className='fs-4 fw-bolder fw-bold'>Social Links</p></li>

              <li>
                {/* to-do    add likes of social media
                 */}
                <a href="https://www.linkedin.com/in/abdelhakim-outass-5b2b75284" target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faLinkedin} className='text-purple fs-4 me-2'/>
                </a>
              </li>

              <li>
                {/* to-do   add likes of social media
                 */}
                <a href="https://www.instagram.com/outass1/" target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faInstagram} className='text-purple fs-4 me-2'/>
                </a></li>

              <li>
                {/* to-do    add likes of social media
                 */}
                <a href="https://web.facebook.com/people/%D8%B1%D9%88%D8%A7%D9%82-%D9%86%D9%88%D8%B1%D8%A9/61582447383574/" target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon icon={faFacebook} className='text-purple fs-4 me-2'/>
                </a></li>

            </ul>
          



        </div>
        <p className='py-1 px-5 m-0 text-light '>@ Abdelhakim Outass | React Developer</p>

      </div>
    </footer>
  )
}

export default Footer
