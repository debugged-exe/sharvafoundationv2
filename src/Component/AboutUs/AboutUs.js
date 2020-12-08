import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        Aos.init({ duration: 1600 });
    }, []);
    return (
        <div className='mt4'>
                <div data-aos='fade-down' style={{zIndex:'-1'}} className='tc'>
                    <div className='f2'>ABOUT SHARVA</div>
                        <div className='underline'></div>
                        <div className='f4 pa2'>We’re an international organisation, working with people in</div>
                        <div className='f4 pa2'>50 countries for a world free from poverty and injustice.</div>
                </div>
                <div className='flex flex-wrap'>
                    <div style={{ maxWidth: '100%', height: 'auto', zIndex: '-1' }} data-aos='fade-up' className='w-60 justify-center'>
                        <img className='' src='http://d169hzb81ub7u3.cloudfront.net/charity/wp-content/uploads/sites/20/2015/03/about.jpg' alt=' '></img>
                    </div>
                    <div data-aos='fade-left' className='flex f4 w-30 justify-center flex-column tl'>
                        <div className='pb3'>We’re an international development organisation with our head office based in Greece. We also have offices right across Asia, the Americas and Europe. We believe the people whose lives our work affects should decide how we’re run.</div>
                        <div className='pb3'>And that’s what makes us different. We help people use their own power to fight poverty and injustice.</div>
                        <div className='pb3'>You can help us make a fairer, better world – wherever you are. Your voice can persuade world leaders to change policies.</div>
                    </div>
                </div>
        </div>
    );
}

export default AboutUs;