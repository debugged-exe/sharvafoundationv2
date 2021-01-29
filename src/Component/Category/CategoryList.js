import React from "react";
import Category from "./Category";
import bloodDonationBg from '../../Images/blooddonation.jpg';
import treePlantationBg from '../../Images/projectgreen.jpg'
import covidBg from  '../../Images/covid.jpg'

const CardList = () =>{
    const Categories=[
        {
            heading:'Blood Donation',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            imgUrl:{bloodDonationBg}
        },
        {
            heading:'Tree PLantation',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            imgUrl:{treePlantationBg}
        },
        {
            heading:'Covid-19',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            imgUrl:{covidBg}
        }
    ]
    
const CategoriesList = Categories.map((ctg,index) =>(<Category key = {index} ctg={ctg}/>))
    return(
    <div data-aos='fade-right' className='flex flex-wrap justify-around items-around mv5'>
        {CategoriesList}
    </div>);
}

export default CardList;