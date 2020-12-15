import React from "react";
import Category from "./Category";

const CardList = () =>{
    const Categories=[
        {
            heading:'Blood Donation',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            imgUrl:'https://images.unsplash.com/photo-1548013146-72479768bada?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'
        },
        {
            heading:'Tree PLantation',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            imgUrl:'https://images.unsplash.com/photo-1548013146-72479768bada?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'
        },
        {
            heading:'food Donation',
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            imgUrl:'https://images.unsplash.com/photo-1548013146-72479768bada?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'
        }
    ]
    
const CategoriesList = Categories.map(ctg =>(<Category ctg={ctg}/>))
    return(
    <div data-aos='fade-right' className='flex flex-wrap justify-around items-around mv5'>
        {CategoriesList}
    </div>);
}

export default CardList;