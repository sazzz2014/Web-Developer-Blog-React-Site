import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pexels1 from '../Assets/pexels-1.jpg';
import pexels2 from '../Assets/pexels-2.jpg';
import pexels3 from '../Assets/pexels-3.jpg';
import pexels4 from '../Assets/pexels-4.jpg';

export default class CarouselBox extends Component {
	render() {
		return (
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={pexels1}
						alt="Forest"
						width="500px"
						height="850px"
					/>
					<Carousel.Caption>
						<h3>h3header</h3>
						<p>ghfhfghfjfjgh ghj hgkjk</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={pexels2}
						alt="Forest"
						height="850px"
					/>
					<Carousel.Caption>
						<h3>h3header</h3>
						<p>ghfhfghfjfjgh ghj hgkjk</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={pexels3}
						alt="Forest"
						height="850px"
					/>
					<Carousel.Caption>
						<h3>h3header</h3>
						<p>ghfhfghfjfjgh ghj hgkjk</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={pexels4}
						alt="Forest"
						height="850px"
					/>
					<Carousel.Caption>
						<h3>h3header</h3>
						<p>ghfhfghfjfjgh ghj hgkjk</p>
					</Carousel.Caption>
				</Carousel.Item>

			</Carousel>
		);
	}
}