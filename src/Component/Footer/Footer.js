import React from 'react';
import './Footer.css';
import { FaFacebook,FaInstagram,FaWhatsapp} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className='bg-black white pv2 bottom'>
        <div className="ml3 mr3 flex justify-between pointer items-center flex-wrap h-15">
            <div className='f5'>&copy; Copyrights 2020 | sharvafoundation.org | All rights reserved</div>
            <div className='f5'>Privacy Policy</div>
            <div className="flex f4 justify-around">
                <a style={{outline:'none'}} href='https://www.facebook.com/Sharva-Foundation-571908020152850/?modal=admin_todo_tour' className='pa2 link white dim'><FaFacebook color='white' /></a>
                <a style={{outline:'none'}} href='https://instagram.com/sharvafoundation?igshid=yubeg3h96wn4' className='pa2 link white dim'><FaInstagram color='white'/></a>
                <a style={{outline:'none'}} href='https://wa.me/917517502268' className='pa2 link white dim'><FaWhatsapp color='white'/></a>
                <a style={{outline:'none'}} href='https://twitter.com/Sharvacharity' className='pa2 link white dim'><AiOutlineTwitter color='white'/></a>
                <a style={{outline:'none'}} href="mailto:foundationsharva@gmail.com?subject=Joining a good cause" className='pa2 link white dim'><SiGmail color='white'/></a>
            </div>
        </div>
        </footer>
    );
}

export default Footer;