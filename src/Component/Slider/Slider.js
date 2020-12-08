import React,{Component} from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slider1 from '../../Image/slider1.jpeg';
import slider2 from '../../Image/slider2.jpeg';
import slider3 from '../../Image/slider3.jpeg';
import slider4 from '../../Image/slider4.jpeg';
import './Slider.css';
import 'tachyons';

let sliderArr = [slider1,slider2,slider3,slider4];

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
			<div className = "slider">
				{
					sliderArr.map((item,index) => {
						return(
							<div key = {index} className = "slide" style = {{transform: `translateX(${this.state.x}%)`}}>
								<img src = {item} className = "sliderImg" alt-img="slider-img"></img>
								<button id = "goLeft" onClick = {()=>this.goLeft()}>
									<FaChevronLeft className = "icon"/>
								</button>
								<button id = "goRight" onClick = {()=>this.goRight()}>
									<FaChevronRight className = "icon"/>
								</button>
								<div className = "tc pt2 f3 link br3 ba bw1 pointer donate1">Donate</div>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default Slider;