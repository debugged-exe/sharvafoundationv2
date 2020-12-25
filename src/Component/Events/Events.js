import React from 'react'
import { Col, Container, Row,CarouselItem } from 'react-bootstrap';
import slider1 from '../../Image/slider1.jpeg';
import slider2 from '../../Image/slider2.jpeg';
import slider3 from '../../Image/slider3.jpeg';
import slider4 from '../../Image/slider4.jpeg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'tachyons'



const Event = () => {
    const events = [
        {key:'CHIPS DISTRIBUTION - PUNE',value:'We distributed 5 full boxes of chips i.e. 750 packets of Chips to kids of Hadapsar, Swargate and Sayyed Nagar -Pune, Maharashtra. This feat could not have been achieved without the help of Feeding India, as they were the one to sponsor it as well as YUG Foundation as they supplied us with them. We plan on taking more challenges up ahead and we’re sure we’ll conquer.',id:'chips'},
        {key:'ROADSIDE BLANKET DISTRIBUTION - JAMMU',value:'At the most important time of the year when the winter is at its hardest, we provided warmth to those people in need by donating 100 blankets. We distributed blankets to roadaside people residing in different areas of Jammu.',id:'blanketsJammu'},
        {key:'CHILDREN\'S DAY',value:'Diwali wasn’t completely filling out the 14th of November and thus Children’s day decided to kick in. Our team went an extra mile and did what we do best. Help. We donated pair of traditional clothes, faral boxes, cupcakes, chocolates, juice packs and diwali essentials to 60 children at Mamta Bal Sadan orphanage located at Saswad Pune. We guess this is the way Sharva Foundation likes to celebrate any occasion. The children were extremely polite and gentle and made this day special for us too. Children are the founding blocks of the walls on which our society rests and thus they are essential',id:'childrenDay'},
        {key:'DIWALI ROADSIDE DISTRIBUTION - PUNE',value:'The Festival of Lights was graciously upon us and although the festivities might get diminished but the necessities still remain. With that, we successfully completed event of roadside distribution, of boxes of joy which were distributed among 30 families at Kondwa, Viman Nagar, Yerwada, Ghorpadi, Katraj and Kalyani Nagar. As it was Diwali, the boxes of joys contained Faral boxes, Blankets, Cupcakes, Namkeen packets and Diwali essentials. Everything was corresponded under proverb safety precautions. We’d also like to take this opportunity to cognisance, that although we might get overwhelmed with the extent of our festivities, there’s always someone out there you can help.',id:'diwaliPune'},
        {key:'BLANKET DISTRIBUTION - NOIDA',value:'2nd Oct 2020, what a remarkable day! Sharva Foundation had conquered yet another milestone! This event was a tribute to Atharva Muley, founding member of SHARVA Foundation, a dear friend and an insightful human being. A total of 50 food kits were distributed among people staying at labor camp near ARV Newtown situated in Pisoli, Pune.We were overwhelmed to see the numerous donations from our volunteers. Another volunteer, MS Shilpa, who was celebrating her birthday, decided to share her happiness with the kids with delicious cakes. Packets of laddoos were also given out which we are sure made their day.',id:'blanketsNoida'},
        {key:'NUTRITION WEEK',value:'Sharva foundation felt an overwhelming sense of happiness and pride as for the first time we were able to undertake our event of distribution of Blankets successfully. On the 20th of September, 2020, a total of 50 blankets were distributed at the Labor camp near Parthalagaon, Noida. It was a heartfelt moment for us to reach out our hands to help the people and we are thankful for our members in Delhi who made this possible.',id:'nutrition'},
        {key:'CHOCOLATE DISTRIBUTION',value:'Happiness doesn’t result from what we get, but from what we give and on the 26th of August 2020, Sharva family achieved happiness having donated 2500 Kinder Joy Chocolates to the children of Parvati Paitha, Khilarewadi slum, Pan Mala slum, Yewalewadi and Maher Foundation. The smiles that paved across the faces of kids, was truly heartwarming and this was made possible by the gracious sponsorship by Zomato and Yug Foundation.',id:'chocolate'},
        {key:'INDEPENDENCE DAY',value:'Sharva family’s first task was successfully executed on the 15th August, 2020. We were able to enumerate Slippers, Cupcakes, Markers, White boards, Chocolates, Notebooks, Pencils and Sanitary napkins to Sarthak Seva Sangh in Pune District, Maharashtra. This event was made possible by the generous sponsorship from Yug Foundation, SSD Box of Delight, Jagruti Group and Advayta Zadoo.',id:'independence'}
    ]
    const handleDragStart = (e) => e.preventDefault();
 
const items = [
  <img src={slider1} onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={slider2} onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={slider3} onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={slider4} onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={slider2} onDragStart={handleDragStart} className="yours-custom-class" />,
  <img src={slider3} onDragStart={handleDragStart} className="yours-custom-class" />,
];

const responsive=  {
    0: {
        items: 1,
    },
    1024: {
        items: 3
    }
}
    return ( 
        <Container style={{marginTop:'100px'}}>
            {events.map((event)=>(
            <div id={event.id}>
            <span id="goto" style = {{marginTop: "-300px", paddingBottom: "300px", display: "block"}}> &nbsp; </span>
            <div>        
            <Row className="mx-3 d-flex justify-content-center">
                <h2 className="font-weight-bold text-center">{event.key}</h2>
            </Row>
            {/* <Row className="d-flex justify-content-center col">
                <div className='underline w-60'></div>
            </Row> */}
            <Row className="mx-1 text-center">
                <p className="text-left">{event.value}</p>
            </Row>
            <AliceCarousel mouseTracking items={items} animationType="slide" responsive={responsive}/>
            </div>
            </div> 
            ))}

            </Container>
     );
}
 
export default Event;