import React from 'react';
import Botao from '../Botao/Botao';
import Barrinha from '../../Barrinha/Barrinha';
import logoGrande from '../../../assets/imagens/desktop_logo_grande.png';

import './Introducao.styles.css';

const Introducao = (props) => {
	return (
		<div className='bloco bloco-introducao'>
			<div className='imagem-grande-desktop'>
				<img
					src={logoGrande}
					alt=''
				/>
				<h1>Taj Home Resort</h1>
			</div>

			<div className='texto-principal'>
				<p>
					<span className='destaque'>O luxuojo Taj Home Resort</span> que já
					está em construção{' '}
					<span className='destaque'>
						desafia o comum, te oferece o que é tão precioso na vida:
					</span>{' '}
					mais tempo para aproveitar o que{' '}
					<span className='destaque'>vale a pena.</span> <br /> Aqui,{' '}
					<span className='destaque'>
						cada segundo gasto é um segundo ganho.
					</span>
				</p>
			</div>

			<Botao
				title='MARQUE UMA VISITAÇÃO'
				className='button_outlined_yellow glow'
			/>

			<div className='texto-final'>
				<h2>VENHA CONHECER O PARAÍSO DAS ARÁBIAS, LOCALIZADO EM VILA VELHA</h2>
				<Barrinha larg={5} />
			</div>
		</div>
	);
};

export default Introducao;
