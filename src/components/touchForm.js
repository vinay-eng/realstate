import React from 'react';
import '../style/touchForm.css'

function TouchForm() {
  return (
    <div className='touchForm'>
        <div className='touchForm_heading'>
          {/* <span>Your Home Awaits You</span> */}
          <p>Get In Touch</p>
    </div>
    <div className='touchForm_input'>
      <input placeholder='EMAIL/PHONE NO'/>
      <input placeholder='Locality'/>

    </div>
        
          
    </div>
  );
}

export default TouchForm;
