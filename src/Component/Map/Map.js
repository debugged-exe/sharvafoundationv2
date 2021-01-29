import React from 'react';
import map_src from './map.jpg';

const Map = () => {
    return (
        <div className='ma2 mb4'>
            <p className='f2 tc'>Reach Us At</p>
            <div className='flex items-center justify-around flex-wrap'>
                <img style={{ height: '400px', width: '425px' }} src={map_src} alt='map'></img>
                <div className='pa3 map-box'>
                    <div>
                        <h3>Ankita Zadoo</h3>
                        <h5>Jammu</h5>
                        <p>+91 7006616995</p>
                    </div>
                    <div>
                        <h3>Tanmay Jagtap</h3>
                        <h5>Pune</h5>
                        <p>9168894490</p>
                    </div>
                </div>
                <div className='pa3 map-box'>
                    <div>
                        <h3>Ankita Zadoo</h3>
                        <h5>Jammu</h5>
                        <p>+91 7006616995</p>
                    </div>
                    <div>
                        <h3>Ankita Zadoo</h3>
                        <h5>Jammu</h5>
                        <p>+91 7006616995</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Map;