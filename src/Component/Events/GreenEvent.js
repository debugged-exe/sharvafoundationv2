import React, { Component } from 'react';
import { Col, Container, Row,CarouselItem } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'tachyons'

import b1 from '../../Images/projectgreen/slider_1.jpeg'
import b2 from '../../Images/projectgreen/slider_2.jpeg'
import b3 from '../../Images/projectgreen/slider_3.jpeg'


const GreenEvent = () => {
    const handleDragStart = (e) => e.preventDefault();

    const green = [b1, b2, b3]
    const greenArr = []
    green.forEach(image=>{
        greenArr.push(<img src={image} onDragStart={handleDragStart} height='350' style={{paddingRight:5}}/>)
    })

    


    const events = [
        {key:'Project Green',value:'We are glad to announce that Sharva Foundation will be exploring a new segment in the coming months, called ‘PROJECT GREEN’. We realize that even though we are not the first ones to initialize this, but we surely will do our part in annexing change. PROJECT GREEN categories everything including planting trees, collecting up and dumping of waste, cleaning of any region or even doing the slightest of things which will make our surroundings a little more pleasant. As Sharva family strongly believes cleanliness is a part of the faith, the faith that drives us to do more, give more and witnessing change. Cleanliness is a state of purity, clarity, and precision and we should strive to do our best.',id:'green',imgs:greenArr},
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
 
export default GreenEvent;