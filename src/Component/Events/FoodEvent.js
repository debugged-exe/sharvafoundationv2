import React, { Component } from 'react';
import { Col, Container, Row,CarouselItem } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'tachyons'

import f1 from '../../Images/food/foodDonateJammu/f1.jpeg'
import f2 from '../../Images/food/foodDonateJammu/f2.jpeg'
import f3 from '../../Images/food/foodDonateJammu/f3.jpeg'
import f4 from '../../Images/food/foodDonateJammu/f4.jpeg'
import f5 from '../../Images/food/foodDonateJammu/f5.jpeg'
import f6 from '../../Images/food/foodDonateJammu/f6.jpeg'
import f7 from '../../Images/food/foodDonateJammu/f7.jpeg'
import f8 from '../../Images/food/foodDonateJammu/f8.jpeg'


import diw1 from '../../Images/food/diwali_rd_jammu/diw1.jpeg'
import diw2 from '../../Images/food/diwali_rd_jammu/diw2.jpeg'
import diw3 from '../../Images/food/diwali_rd_jammu/diw3.jpeg'
import diw4 from '../../Images/food/diwali_rd_jammu/diw4.jpeg'
import diw5 from '../../Images/food/diwali_rd_jammu/diw5.jpeg'
import diw6 from '../../Images/food/diwali_rd_jammu/diw6.jpeg'
import diw7 from '../../Images/food/diwali_rd_jammu/diw7.jpeg'
import diw8 from '../../Images/food/diwali_rd_jammu/diw8.jpeg'
import diw9 from '../../Images/food/diwali_rd_jammu/diw9.jpeg'

import a1 from '../../Images/food/atharv/a1.jpeg'
import a2 from '../../Images/food/atharv/a2.jpeg'
import a3 from '../../Images/food/atharv/a3.jpeg'
import a4 from '../../Images/food/atharv/a4.jpeg'
import a5 from '../../Images/food/atharv/a5.jpeg'
import a6 from '../../Images/food/atharv/a6.jpeg'


const FoodEvent = () => {
    const handleDragStart = (e) => e.preventDefault();

    const foodJammu = [f1, f2, f3, f4, f5, f6, f7, f8]
    const foodJammuArr = []
    foodJammu.forEach(image=>{
        foodJammuArr.push(<img src={image} onDragStart={handleDragStart} height='350' style={{paddingRight:5}}/>)
    })

    const diwali = [diw1,diw2,diw3,diw4,diw5,diw6,diw7,diw8,diw9]
    const diwaliArr = []
    diwali.forEach(image=>{
        diwaliArr.push(<img src={image} onDragStart={handleDragStart} height='350' style={{paddingRight:5}}/>)
    })

    const atharv = [a1,a2,a3,a4,a5,a6]
    const atharvArr = []
    atharv.forEach(image=>{
        atharvArr.push(<img src={image} onDragStart={handleDragStart} height='350' style={{paddingRight:5}}/>)
    })


    const events = [
        {key:'FOOD DISTRIBUTION - JAMMU',value:'On the eve of New Year, we fed 130 underprivileged children of the Balgran Orphanage in Channi Rama, Jammu. The menu had Rajma - rice, Matar-Paneer, Kheer and sweets. The children welcomed us graciously. Sharva Foundation priorities safety and thus everyone followed the necessary protocols required, wearing masks and gloves and everything was thoroughly sanitised. We hope that there deeds might bring a smile across faces and wish to make a change in the lives of these people.',id:'food',imgs:foodJammuArr},
        {key:'DIWALI ROADSIDE DISTRIBUTION - JAMMU',value:'As our Diwali run continued we finally finished it at last and as profusely as we can. On the day of Diwali we were able to share some home made kindness. Sharva Foundation donated 110 people with homemade cooked food, fruits and Diwali sweets. We distributed it among people residing in Trikuta Nagar, Gandhinagar, Channi Himmat, and Gole Market area. We are joyous to share some home love with people besides our family. We look forward to help more and more people and share as much happiness as we can.',id:'diwali',imgs:diwaliArr},
        {key:'TRIBUTE TO ATHARV MULEY',value:'2nd Oct 2020, what a remarkable day! Sharva Foundation had conquered yet another milestone! This event was a tribute to Atharva Muley, founding member of SHARVA Foundation, a dear friend and an insightful human being. A total of 50 food kits were distributed among people staying at labor camp near ARV Newtown situated in Pisoli, Pune.We were overwhelmed to see the numerous donations from our volunteers. Another volunteer, MS Shilpa, who was celebrating her birthday, decided to share her happiness with the kids with delicious cakes. Packets of laddoos were also given out which we are sure made their day.',id:'atharv',imgs:atharvArr},
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
 
export default FoodEvent;