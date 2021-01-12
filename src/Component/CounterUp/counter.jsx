import React from "react";
import { TiGroup } from "react-icons/ti";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { RiPlantFill,RiWomenFill } from "react-icons/ri";

function Counter() {
  return (
    <div className='mt5 flex flex-wrap justify-around items-center f3 pointer'>
      <div style={{width:'300px',background:'#e88f0a'}} className='flex flex-wrap justify-center items-center flex-column ba br3 pa3 ma2 grow shadow-4'>
        <TiGroup size='2.5rem' />
        <p>Volunteers</p>
        <p>150</p>
      </div>
      <div style={{width:'300px', background:'#e1a448'}} className='flex flex-wrap justify-center items-center flex-column ba br3 pa3 ma2 grow shadow-4'>
        <RiPlantFill size='2.5rem' />
        <p>Trees Planted</p>
        <p>150</p>
      </div>
      <div style={{width:'300px', background:'#efbc70'}} className='flex flex-wrap justify-center items-center flex-column ba br3 pa3 ma2 grow shadow-4'>
        <GiForkKnifeSpoon size='2.5rem' />
        <p>Food Kits</p>
        <p>150</p>
      </div>
      <div style={{width:'300px', background:'#efbc99'}} className='flex flex-wrap justify-center items-center flex-column ba br3 pa3 ma2 grow shadow-4'>
        <RiWomenFill size='2.5rem' />
        <p>Sanitary Napkins</p>
        <p>150</p>
      </div>
    </div>
  );
}

export default Counter;
