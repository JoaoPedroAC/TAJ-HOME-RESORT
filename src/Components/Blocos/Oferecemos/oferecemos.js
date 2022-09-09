import React from 'react';
import { espaco } from '../../functions/espaco.js';
import './oferecemos.css';
import areaDeLazer from '../../../assets/imagens/area-de-lazer.png'

const Oferecemos = () => {
	return (
		<div className='server-area'>
			<h2>Oferecemos o melhor para o seu lazer.</h2>
            {espaco(1)}
			<div className='server-img'>
				<img src= {areaDeLazer}/>
			</div>
            {espaco(2)}
		</div>
	);
};
export default Oferecemos;
