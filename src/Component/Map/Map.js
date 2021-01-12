import React from 'react';
import map_src from './map.jpg';

const Map = () => {
    return (
        <div className='ma2 mb4'>
            <p className='f2 tc'>Reach Us At</p>
        <div className='flex items-center justify-around flex-wrap'>
            <img style={{height:'400px',width:'425px'}} src={map_src}></img>
            <div className='pa3 map-box'>
                <div>
                    <h3>Ankita Zadoo</h3>
                    <h5>Jammu</h5>
                    <p>+91 7006616995</p>
                </div>
                <div>
                    <h3>andra,sjasnjn</h3>
                    <h5>andra,sjasnjn</h5>
                    <p>55151321321</p>
                </div>
            </div>
            <div className='pa3 map-box'>
                <div>
                    <h3>andra,sjasnjn</h3>
                    <h5>andra,sjasnjn</h5>
                    <p>55151321321</p>
                </div>
                <div>
                    <h3>andra,sjasnjn</h3>
                    <h5>andra,sjasnjn</h5>
                    <p>55151321321</p>
                </div>
            </div>
        </div>
        </div>

    );
}

export default Map;