import React from 'react'
import ReactDOM from 'react-dom/client'; 

function Form() {
    
  
  return (
   <form  >
     <br></br><br></br><br></br>
     <center>
    <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='https://calendlyc.herokuapp.com/accounts/logingoogle/login/?method=oauth2';
      }}
> login with google</button>
<br></br><br></br>
<h4>OR</h4>
{/* <div>
EMAIL:
<input type='text' placeholder='email'></input>
<br></br>
Password:<input type='text'placeholder='password'></input>
</div> */}
</center>l̥
   </form>
  )
}
export default Form
// ReactDOM.render( <Form/>,document.getElementById(''));


