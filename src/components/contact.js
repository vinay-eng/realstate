import * as React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

import "../style/contact.css"


function Contact(){
    return (
        <div className='mainContact'>
            <span><AiOutlineMail/>{" "}singhvinay2017@gmail.com <BiPhoneCall/>+91 8448735275</span>
        </div>
    )
}


export default Contact;