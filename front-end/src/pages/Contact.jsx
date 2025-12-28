import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faWhatsapp, faLinkedin
  // , faInstagram, ,faFacebook
} from '@fortawesome/free-brands-svg-icons';

function Contact() {

  const [state, handleSubmit] = useForm("xwvknjwb");
  if (state.succeeded) {
    return ( 
      <div className='text-danger bg-body rounded-3 fs-2 text-center m-5 p-5'>
        <p >Thanks for contacting me! I will get back to you soon.</p>
        <p>Message sent successfully !</p>
      </div>
    )
  }

  return (
    
    <div className='text-center m-3 p-5'>
      <h4 className='text-warning border-bottom border-warning w-50  mx-auto'>CONTACT ME</h4>


    <div className='d-flex flex-column flex-md-row justify-content-evenly align-items-start mt-5' >
      <img src='/Image23421.png' alt="Contact img"  
          className='img-fluid border-start border-bottom border-warning '   style={{width: "80%",maxWidth:'500px', height: "auto", borderRadius: "2%",  }}
        ></img>

        <div className='text-start w-100 w-md-50 mt-4 mt-md-4 ms-md-5 '>

          <h1 className='text-light '>Let’s work together</h1>

          <form onSubmit={handleSubmit} className='d-flex flex-column gap-3 mt-4 p-4 '>

            <label htmlFor="name" className='text-warning fw-bold form-label'>Full Name :</label>
            <input id='name' type="textarea" name="name" placeholder='Enter Your Full Name' required
            className='form-control'/>
            <ValidationError 
              prefix="Name"
              field="name"
              errors={state.errors}
            />

            <label htmlFor="email" className='text-warning fw-bold form-label'>Email :</label>
            <input id='email' type="email" name="email" placeholder='Enter Your Email' required
            className='form-control'/>
            <ValidationError 
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="Message" className=' text-warning fw-bold form-label'>Message :</label>
            <input id='Message' type="textarea" name="Message" placeholder='How Can I Help You' required
            className='form-control'/>
            <ValidationError 
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            
            <div className='text-center pt-5 '>
              <button type="submit" disabled={state.submitting} className='btn btn-outline-warning w-25 px-4 py-2 fw-semibold rounded-pill'>
              Send
            </button>

            </div>
            

          </form>

          <ul className='list-unstyled d-flex flex-wrap justify-content-center gap-xxl-5 mt-5 '>

            <li>
              <a href='mailto:outasabdelhakim@gmail.com' target='_blank' rel='noopener noreferrer'
                  className='text-decoration-none text-light fw-bold '
                    >
                       <FontAwesomeIcon icon={faEnvelope} className='fs-4 me-2' />
                     outasabdelhakim@gmail.com </a>
            </li>

            

            <li>
              <a href="https://www.linkedin.com/in/abdelhakim-outass-5b2b75284" target='_blank' rel='noopener noreferrer'
                  className='text-decoration-none text-light '>
                  <FontAwesomeIcon icon={faLinkedin} className='fs-4 me-2'/>
                Abdelhakim Outass</a>
            </li>

            <li>
              <a href='https://api.whatsapp.com/send?phone=212640610072' target='_blank' rel='nooper noreferrer'
                  className='text-decoration-none text-light fw-bold '
                    >
                       <FontAwesomeIcon icon={faWhatsapp} className='fs-4 me-2' />
                     +212 640610072</a>
            </li>

          </ul>

        </div>
      </div>
  
    </div>
  )
}

export default Contact
