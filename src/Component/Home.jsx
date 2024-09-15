import React from 'react'
import body from '../assets/goto.jpg';

const Home = () => {
  return (
    <>
     <div className='container-fluid'>
        <div>
          <h1 className='phone'>Welcome to Hakanni High School</h1>
        </div>
        <img src={body} alt="Back" className='Bg mt-5' />
      </div>
    </>
  )
}

export default Home