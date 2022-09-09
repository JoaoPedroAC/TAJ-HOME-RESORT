import React from 'react';
import Mapa from './Mapa.js';
import { espaco } from '../../functions/espaco.js';
import './localizacao.css';

function Localizacao() {
	return (
		<div className='main-container-localizacao'>
			<h2>LOCALIZAÇÃO</h2>
			<br />
			<h3>O MAIOR EMPREENDIMENTO DE VILA VELHA</h3>
			<br />
			<p>
				O{' '}
				<span className='destaque'>
					maior arranha-céu do Espirito Santo de frente
				</span>{' '}
				para o mar de Vila Velha, localizado em uma das{' '}
				<span className='destaque'>
					regiões de maior participação econômica e crescimento do Brasil.
				</span>
			</p>
			{espaco(1)}
			<div className='localizacao-container'>
				<Mapa className='map-frame' />
			</div>
			{/* localizacao-container */}
			<br />
			<div className='local-torres'>
				<p>
					Torre Leste:{' '}
					<span className='cinzas'>
						Rodovia do Sol, 4300, Bairro Jockey de Itaparica, Vila Velha- ES.
					</span>
				</p>
				{espaco()}
				<p>
					Torre Oeste:{' '}
					<span className='cinzas'>
						Rua Ceará, Bairro Jockey , Vila Velha- ES
					</span>
				</p>
				<br />
				<p className='explicacao'>
					O Taj Home Resort é localizado em Vila Velha,{' '}
					<span className='destaque'>a poucos metros de distância do mar</span>{' '}
					e a 10 minutos do centro, para que você possa{' '}
					<span className='destaque'>
						desfrutar uma experiência única e exclusiva
					</span>{' '}
					com sua família <span className='destaque'>perto da natureza</span>,
					ao mesmo passo que os principais empreendimentos como fármacias,
					restaurantes, shopping e padaria estão{' '}
					<span className='destaque'>a poucos quilômetros de você.</span>
				</p>
			</div>
			{/* local-torres */}
			{espaco(1)}
		</div>
		// main-container-localizacao
	);
}
export default Localizacao;
