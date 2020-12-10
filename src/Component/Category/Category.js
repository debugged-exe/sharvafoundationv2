import React, { useEffect } from 'react';
import Aos from 'aos';
import './Category.css';

const Category = ({ctg}) => {
    
    useEffect(() => {
        Aos.init({ duration: 1600 });
    }, []);

    return (
        <div className='card ma3'>
            <div className='imgBox'>
                <img src={`${ctg.imgUrl}`} alt='Taj Mahal'></img>
            </div>
            <div className='content'>
                <h1>{ctg.heading}</h1>
                <p>{ctg.description}</p>
            </div>
        </div>
    );
}

export default Category;