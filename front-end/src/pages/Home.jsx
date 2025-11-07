import React from 'react';
import { Link, } from 'react-router-dom';
import TopProject from '../components/TopProject';



function Home() {
  return (
    <div className='bg-mate '>
      
      <div className='user-home d-flex justify-content-around align-items-center flex-lg-nowrap gap-5 p-5 '>   
       

        <div className='p-5' >
          <p>Hello, I'm
          <span className='d-block text-light fs-1 fw-bolder'>ABDELHAKIM <br/> OUTASS </span>
          Software Developer
          </p>

          <button className='btn btn-outline-warning px-4 py-2 fw-bold me-3 my-3 rounded-pill custom-btn'>
            Hire Me
          </button>
          <button className='btn btn-outline-warning px-4 py-2 fw-semibold rounded-pill custom-btn'>
            <Link to="/Projects" className='text-decoration-none text-warning fw-bold'>See My Projects</Link>
          </button>
        </div>


        <img src='/homeimg.jpg' alt="home img"   
          className='img-fluid border-end border-bottom border-warning'   style={{width: "80%",maxWidth:'500px', height: "auto", borderRadius: "2%",
           
          }}
        ></img>

      </div>

          {/* 2  top 5 project  # example projext top 5 --- */}
          <TopProject />
      



    </div>

    
  )
}

export default Home