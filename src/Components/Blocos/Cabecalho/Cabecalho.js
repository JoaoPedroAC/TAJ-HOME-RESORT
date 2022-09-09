import React from 'react';
import './Cabecalho.css';
import logoPequena from '../../../assets/imagens/desktop_logo_pequena.png';

const Cabecalho = (props) => {
	return (
		<div className='head'>
			<img src={logoPequena} alt='TAJ HOME RESORT' />
		</div>
	);
};

export default Cabecalho;
