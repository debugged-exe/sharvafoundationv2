import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import './Contact.css';
const Contact = () =>{
    return(
        <section>
        <div class="contact-container">
          <div data-aos='fade-right' class="left">
              <div className='flex flex-column pv3 pl4 pr6 justify-around'>
                <h2>Connect Us</h2>
                <input placeholder='Enter Your Name' class="br3 shadow-4 mv3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="email-address"/>
                <input placeholder='Enter Your Email' class="br3 shadow-4 mv3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"/>
                <input placeholder='Write a Message' class="br3 shadow-4 mv3 pa5 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"/>
                <input class="shadow-4 b pv2 input-reset grow pointer dib" type="submit" value="Send"></input>
              </div>
          </div>
          <div data-aos='fade-left' class="right">
            <div class="content">
              <h1>Contact Us</h1>
              <h6 className='flex items-center'><div className='pr2'><FaMapMarkerAlt/></div><div>Hno. 163 Ambika Vihar Near PHC Gole Gujral, Jammu, Jammu and Kashmir</div></h6>
              <h6 className='flex items-center'><div className='pr2'><SiGmail/></div><div>foundationsharva@gmail.com</div></h6>
              <h6 className='flex items-center'><div className='pr2'><FaPhoneAlt/></div><div>+91 9168894490</div></h6>
            </div>
          </div>
        </div>
      </section>
    );
}


export default Contact;