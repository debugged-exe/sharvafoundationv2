import React ,{useEffect}from "react";
import RecentCard from '../RecentCard/RecentCard.js';
import './RecentPost.css';
import Aos from 'aos';

const RecentPost = () => {

    useEffect(() => {
        Aos.init({ duration: 1600 });
    }, []);
    const events = [
        {key:'Chips Decoration-Pune',summary:'We distributed 5 full boxes of chips i.e. 750 packets of Chips to kids of Hadapsar, Swargate and Sayyed Nagar -Pune, Maharashtra.',id:'chips'},
        {key:'Roadside Blanket Distribution-Jammu',summary:'At the most important time of the year when the winter is at its hardest, we provided warmth to those people in need by donating 100 blankets.',id:'blanketsJammu'},
        {key:'Children\'s Day',summary:'Diwali wasn’t completely filling out the 14th of November and thus Children’s day decided to kick in.',id:'childrenDay'},
        {key:'Diwali Roadside Distribution-Pune',summary:'The Festival of Lights was graciously upon us and although the festivities might get diminished but the necessities still remain.',id:'diwaliPune'},
        {key:'Blanket Distribution-Noida',summary:'2nd Oct 2020, A total of 50 food kits were distributed among people staying at labor camp near ARV Newtown situated in Pisoli, Pune.',id:'blanketsNoida'},
        {key:'Nutrition Week',summary:'On the 20th of September, 2020, a total of 50 blankets were distributed at the Labor camp near Parthalagaon, Noida.',id:'nutrition'},
        {key:'Chocolate Distribution',summary:'Happiness doesn’t result from what we get, but from what we give and on the 26th of August 2020, Sharva family achieved happiness having donated 2500 Kinder Joy Chocolates to the children of Parvati Paitha, Khilarewadi slum, Pan Mala slum, Yewalewadi and Maher Foundation.',id:'chocolate'},
        {key:'Independence Day',summary:'We were able to enumerate Slippers, Cupcakes, Markers, White boards, Chocolates, Notebooks, Pencils and Sanitary napkins to Sarthak Seva Sangh in Pune District, Maharashtra.',id:'independence'}
    ]
    return (
        <div style={{overflow: 'hidden' }} className='flex flex-column items-center mb4'>
            <div data-aos='fade-up' className='f1 tc'>Recents</div>
        <div data-aos='fade-right' className='wrapper'>
            <RecentCard id={events[0].id} heading={events[0].key} value={events[0].summary}/>
            <RecentCard id={events[1].id} heading={events[1].key} value={events[1].summary}/>
            <RecentCard id={events[2].id} heading={events[2].key} value={events[2].summary}/>
        </div>
        <div data-aos='fade-left' className='wrapper'>
            <RecentCard id={events[3].id} heading={events[3].key} value={events[3].summary}/>
            <RecentCard id={events[4].id} heading={events[4].key} value={events[4].summary}/>
            <RecentCard id={events[5].id} heading={events[5].key} value={events[5].summary}/>
        </div>
        </div>
    );
}

export default RecentPost;