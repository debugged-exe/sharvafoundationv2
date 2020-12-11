import React from 'react';
import './Footer.css';
import { FaFacebook,FaInstagram,FaWhatsapp} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <footer className='bg-black white pv2'>
        <div className="ml3 mr3 flex justify-between pointer items-center flex-wrap h-15">
            <div className='f4'><a>Copyrights</a></div>
            <div className='f4'><a>Privacy Policy</a></div>
            <div className="flex f3 justify-around">
                <a className='pa2 ph3 link white fb'><FaFacebook /></a>
                <a className='pa2 ph3 link white ig dim'><FaInstagram/></a>
                <a className='pa2 ph3 link white wa'><FaWhatsapp/></a>
                <a className='pa2 ph3 link white gm'><SiGmail/></a>
            </div>
        </div>
        </footer>
    );
}

export default Footer;