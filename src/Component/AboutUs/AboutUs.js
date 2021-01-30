import React, { useEffect } from 'react';
import Aos from 'aos';
import 'tachyons';
import 'aos/dist/aos.css';
import bgImage from '../../Images/slider_1.jpeg'

const AboutUs = () => {
    useEffect(() => {
        Aos.init({ duration: 1600 });
    }, []);
    return (
        <div data-name="article-full-bleed-background">
            <div class="cf" style={{background:{bgImage} , backgroundSize: 'cover'}}>
                <div class="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
                    <header class="bb b--black-70 pv4">
                        <h3 class="f2 fw7 ttu tracked lh-title mt0 mb3">About Sharva</h3>
                    </header>
                    <div class="pt5 pb4">
                        <p class="f4 mt0">
                            Prasat Suor Prat (Khmer: ប្រាសាទសួព្រ័ត) is a series of twelve towers spanne
                            north to south lining the eastern side of royal square in Angkor Thom,
                            near the town of Siem Reap, Cambodia. The towers are made from rugged
                            laterite and sandstone. The towers are located right in front of
                            Terrace of the Elephants and Terrace of the Leper King, flanking the
                            start of the road leading east to the Victory Gate, on either side of
                            which they are symmetrically arranged. Their function remains unknown.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;