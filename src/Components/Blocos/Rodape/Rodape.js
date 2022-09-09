import React from 'react';
import logoGrande from '../../../assets/imagens/logo-rodape.png';

import './rodape.css';
const Rodape = () => {
	return (
		<div className='container-footer-main'>
			<img src={logoGrande} className='container-img' />
			<div className='container-info'>
				<p>Rodovia do Sol, 4300, Bairro Jockey de Itaparica, Vila Velha- ES.</p>
				<p>Eleonor Hortência©</p>
				<p>Alguns direitos reservados.</p>
			</div>
		</div>
	);
};

export default Rodape;
