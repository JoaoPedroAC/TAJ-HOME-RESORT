import React, { Component } from 'react';
import './carousel.styles.css';
import $ from 'jquery';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
	const { className, onClick } = props;
	return (
		<button
			type='button'
			className={className}
			style={{ display: 'block', background: 'red' }}
			onClick={onClick}>
			Next
		</button>
	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return (
		<div
			className={className}
			style={{ display: 'block', background: 'green' }}
			onClick={onClick}
		/>
	);
}

export default class SimpleSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nav1: null,
			nav2: null,
		};
	}

	imgs = [
		require('../../../assets/imagens/Carrossel1/imagem_teste_1.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_2.png'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_3.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_4.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_1.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_2.png'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_3.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_4.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_1.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_2.png'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_3.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_4.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_1.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_2.png'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_3.jpg'),
		require('../../../assets/imagens/Carrossel1/imagem_teste_4.jpg'),
	];

	componentDidMount() {
		this.setState({
			nav1: this.slider1,
			nav2: this.slider2,
		});
	}
	render() {
		const settings = {
			arrows: true,
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: <SampleNextArrow />,
			nextArrow: <SampleNextArrow />,
		};
		const settings2 = {
			arrows: false,
			infinite: true,
			speed: 500,
			slidesToShow: 10,
			slidesToScroll: 1,
			dots: true,
			centerMode: true,
			focusOnSelect: true,
		};
		return (
			<div className='component-carrossel'>
				<h2> Interior: </h2>
				<Slider
					{...settings}
					className='slider'
					asNavFor={this.state.nav2}
					ref={(slider) => (this.slider1 = slider)}>
					{this.imgs.map((src, index) => {
						return (
							<div>
								<img src={src} />
							</div>
						);
					})}
				</Slider>
				<Slider
					{...settings2}
					className='slider'
					asNavFor={this.state.nav1}
					ref={(slider) => (this.slider2 = slider)}>
					{this.imgs.map((src, index) => {
						return (
							<div className='imgContainer'>
								<img src={src} />
							</div>
						);
					})}
				</Slider>
				<h2> Interior: </h2>
				<h2> Interior: </h2>
				<h2> Interior: </h2>

				{/* <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          className="slider-focus"
        >
          {this.imgs.map((src, index) => {
            return (
              <div>
                <img src={src} />
              </div>
            );
          })}
        </Slider>
        <Slider
          {...settings2}
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          className="slider-thumbnails"
        >
          {this.imgs.map((src, index) => {
            return (
              <div className="imgContainer">
                <img src={src} />
              </div>
            );
          })}
        </Slider> */}
			</div>
		);
	}
}

export { SimpleSlider };
