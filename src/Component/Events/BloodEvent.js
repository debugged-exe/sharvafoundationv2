import React, { Component } from 'react';
import { Col, Container, Row,CarouselItem } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'tachyons'

import b1 from '../../Images/blooddonation/slider_1.jpg'
import b2 from '../../Images/blooddonation/slider_2.jpg'
import b3 from '../../Images/blooddonation/slider_3.jpg'


const BloodEvent = () => {
    const handleDragStart = (e) => e.preventDefault();

    const blood = [b1, b2, b3]
    const bloodArr = []
    blood.forEach(image=>{
        bloodArr.push(<img src={image} onDragStart={handleDragStart} height='350' style={{paddingRight:5}}/>)
    })

    


    const events = [
        {key:'Blood Donation',value:'On 28th August,2020, members of our family courageously came forward and donated blood towards a noble cause. We appreciate these 2 members on behalf of SHARVA Family and congratulate them for their participation for a good cause. In such testing time, doing such things isn’t any less than noble and with this we hope more and more people will come forward to help save a life.',id:'blood',imgs:bloodArr},
    ]

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
            <AliceCarousel mouseTracking items={event.imgs} animationType="slide" responsive={responsive}/>
            </div>
            </div> 
            ))}

            </Container>
     );
}
 
export default BloodEvent;