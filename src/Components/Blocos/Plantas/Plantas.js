import React from 'react';
import { plantas } from './static.js';
import './plantas.css';

const Plantas = () => {
	const title = 'Conheça as plantas humanizadas das áreas de lazer';
	return (
		<div className='plantas-container'>
			<h2>{title.toUpperCase()}</h2>
			<div className='img-container'>
				{plantas.map((object, index) => (
					// precisa por o caminho das imagens dentro do arquivo static.js e precisamos definir o tamanho delas
					<img src={object.image} className={object.className} key={index} />
				))}
			</div>
			<h3>AGENDE UMA VISITA</h3>
			<br></br>
		</div>
	);
};

export default Plantas;
