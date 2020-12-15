import React,{Component} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slider1 from '../../Image/slider1.jpeg';
import slider2 from '../../Image/slider2.jpeg';
import slider3 from '../../Image/slider3.jpeg';
import slider4 from '../../Image/slider4.jpeg';
import './Slider.css';
import 'tachyons';

let sliderArr = [slider1,slider2,slider3,slider4];
let QuotesArr = {"  रघु दीक्षित" : "लोका: समस्ता: सुखिनो भवन्तु ।", " रघु दीक्षित": "लोका: समस्ता: सुखिनो भवन्तु ।", "रघु दीक्षित  ": "लोका: समस्ता: सुखिनो भवन्तु ।", "रघु दीक्षित ": "लोका: समस्ता: सुखिनो भवन्तु ।"};
let By = Object.keys(QuotesArr);
let Quotes = Object.values(QuotesArr);

class Slider extends Component{
	constructor()
	{
		super();
		this.state = {
			x: 0
		}
	}

	goLeft = () => {
		(this.state.x === 0) ? this.setState({x: -100*(sliderArr.length-1)}) : this.setState({x: this.state.x+100});
	}

	goRight = () => {
		(this.state.x === -100 * (sliderArr.length-1)) ? this.setState({x: 0}) : this.setState({x: this.state.x-100});
	}

	render()
	{
		return(
			<div className = "slider mb3">
				{
					sliderArr.map((item,index) => {
						return(
							<div key = {index} className = "slide" style = {{transform: `translateX(${this.state.x}%)`}}>
								<img src = {item} className = "sliderImg" alt="slider-img"></img>
								<button id = "goLeft" onClick = {()=>this.goLeft()}>
									<FaChevronLeft className = "icon grow"/>
								</button>
								<button id = "goRight" onClick = {()=>this.goRight()}>
									<FaChevronRight className = "icon grow"/>
								</button>
								<div className="quote" style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
									<p className="tc pa1 f2 sty">{Quotes[index]}</p>
									<p className="tc f3 sty mb2 sty">{By[index]}</p>
									<div className = "tc pv2 ph3 f4 link br2 ba bw1 pointer ma2 donate1 fw6">Donate</div>
								</div>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default Slider;