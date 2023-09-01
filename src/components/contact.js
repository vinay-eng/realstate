import * as React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

import "../style/contact.css"


function Contact(){
    return (
        <div className='mainContact'>
            <div className='mail_contact'>
                <AiOutlineMail/>
                <span>{" "}singhvinay2017@gmail.com</span>
            </div>
            <div className='phone_contact'>
                <BiPhoneCall/>
                <span>8448735275</span>
            </div>
            
            
        </div>
    )
}


export default Contact;