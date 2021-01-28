import React,{useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './OurGoals.css';
import 'tachyons';

const OurGoals = ({goal}) =>
{

    let btnStyle;

    const [hover1, toggleHover1] = useState(false);
    const [hover2, toggleHover2] = useState(false);

    const toggleHandler1 = () => {
        toggleHover1(!hover1)
    }

    const toggleHandler2 = () => {
        toggleHover2(!hover2)
    }

	const {total, complete} = goal;
	const width = (complete*100)/total;

	return(
		<div className='mt4 tc flex flex-column items-center mb4'>
            <div data-aos='fade-down' style={{zIndex:'-1'}}>
                <div className='f2'>Our Goals</div>
                    <div className='underline'></div>
                    <div className='f4 pa2'>The optimus goal of Sharva Foundation is to be completely equipped and primed 
                    <br/>with relief funds so as to be ready with an optimum amount for any event 
                    <br/>or uncalled situation.</div>
            </div>
            <div style={{ maxWidth: '700px', height: 'auto', zIndex: '-1' }} data-aos='fade-up' className='ma3 w-60 br3 flex flex-start goalContainer'>
        		<div style = {{width: `${width}%`}} className="filled br3 tc pa1 f5 white fw5 goalText">{`₹ ${complete} out of ₹ ${total}`}</div>
            </div>
            <div data-aos='fade-up' className='w-60 mt4 flex justify-center'>
            	<div style={hover1?{color: 'white', fontWeight: 'bold', border:'1.5px solid #e88f0a'}:{color: '#e88f0a', fontWeight: 'bold', border:'1.5px solid #e88f0a'}} onMouseEnter = {() => toggleHandler1()} onMouseLeave = {() => toggleHandler1()} className = "mh2 br3 ba btn ph4 pv3 grow">MAKE DONATION</div>
            	<div style={hover2?{color: 'white', fontWeight: 'bold', border:'1.5px solid #e88f0a'}:{color: '#e88f0a', fontWeight: 'bold', border:'1.5px solid #e88f0a'}} onMouseEnter = {() => toggleHandler2()} onMouseLeave = {() => toggleHandler2()} className = "mh2 br3 ba btn ph4 pv3 grow">BECOME A VOLUNTEER</div>
            </div>
        </div>
    );
}
export default OurGoals;