import React, { useEffect } from 'react';
import Aos from 'aos';
import 'tachyons';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        Aos.init({ duration: 1600 });
    }, []);
    return (
        <div className=''>
            About Sharva
        </div>
    );
}

export default AboutUs;