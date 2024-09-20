import React from 'react'
import body from '../../assets/goto.jpg';

const Home = () => {
  return (
    <>
     <div className='container-fluid'>
        <div>
          <h1 className='phone'>Welcome to Hakanni High School</h1>
        </div>
        <img src={body} alt="Back" className='photo'/>
      </div>

      <div className='flex2'>
       <div >My name z zico</div>
       <div> my name z mike</div>
       <div>my name z ayo</div>
        
      </div>
    </>
  )
}

export default Home