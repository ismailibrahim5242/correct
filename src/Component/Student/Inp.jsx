import React from 'react'

const Inp = () => {

 const signup=()=>{
    // alert('I am here')
  if(first.value="" && email.value==""){
    alert('Please Complete the details')
  }

 }
  return (
    
    <>

        
  <div class="container">
    <div class="form_area">
        <p class="title">SIGN UP</p>
        <form action="">
            <div class="form_group">
                <label class="sub_title" for="name" id='first'>Firstname</label>
                <input placeholder="Enter your first name" class="form_style" type="text" />
            </div>
            <div class="form_group">
                <label class="sub_title" for="name">Lastname</label>
                <input placeholder="Enter your Last name" class="form_style" type="text" />
            </div>
            <div class="form_group">
                <label class="sub_title" for="number">Phone number</label>
                <input placeholder="Enter your phone Number" class="form_style" type="number" />
            </div>
            <div class="form_group">
                <label class="sub_title" for="name">Nationality</label>
                <input placeholder="Enter your Country name" class="form_style" type="text" />
            </div>
            <div class="form_group">
                <label class="sub_title" for="email" id='email'>Email</label>
                <input placeholder="Enter your email" id="email" class="form_style" type="email" />
            </div>
            <div class="form_group">
                <label class="sub_title" for="email">Password</label>
                <input placeholder="Enter your desired Password" id="email" class="form_style" type="password" />
            </div>
            <div class="form_group">
                <label class="sub_title" for="password">Confirm Password</label>
                <input placeholder="Confirm Password" id="password" class="form_style" type="password"/>
            </div>
            <div>
                <button class="btn" onClick={signup}>SIGN UP</button>
                <p>Have an Account? <a class="link" href="">Login Here!</a></p><a class="link" href="">
            </a></div><a class="link" href="">
        
    </a></form></div><a class="link" href=""> </a>
    
</div>
    </>

  )
}

export default Inp