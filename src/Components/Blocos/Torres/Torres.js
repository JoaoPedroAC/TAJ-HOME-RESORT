import React from 'react';
import './torres.css';
import torreAlta from '../../../assets/imagens/torres_altas.png';
import torreBaixa from '../../../assets/imagens/torres-baixas.png';
const torres = (props) => {
	return (
		<div className='area-torres'>
			<div className='flex-torres'>
				<img className='torres-altas' src={torreAlta} alt='torre alta' />
				{/*torres-altas*/}

				<div className='torre-oeste'>
					<h3>TORRE OESTE</h3>
					<p>
						Com 158 metros e 50 pavimentos, a torre oeste é a maior do espírito
					</p>
					Possui subsolo, térreo, garagem, pilotis e 47 andares com apartamentos
					de alto padrão.Nesta torre os apartamentos possuem 3 suítes e um
					acabamento de luxo.
					<br />
					<p>A maior planta possui 176,41m². santo.</p>
					<br />
					<p>
						Serão 3 vagas de estacionamento por unidade, podendo também adquirir
						uma quarta vaga.
					</p>
				</div>
				{/* torre-oeste */}

				<div className='torre-leste'>
					<h3>TORRE LESTE</h3>
					<p>
						Possui 25 pavimentos, sendos eles subsolo, térreo, garagem, pilotis
						e 22 andares de apartamentos com o padrão Taj Home Resort de
						qualidade.
					</p>
					<br />
					<p>
						A torre conta com apartamentos de 4 suítes de acabamento de luxo,
						sendo duas delas com varanda.A maior planta possui 295,00m². Serão 4
						vagas de estacionamento por unidade, podendo também adquirir uma
						quinta vaga.
					</p>
					<br />
					<p>
						Serão 4 vagas de estacionamento por unidade, podendo também adquirir
						uma quinta vaga.
					</p>
					{/* torre-leste */}
				</div>
				<img className='torres-baixas' src={torreBaixa} alt='torre baixa' />
			</div>
			{/*flex-torres*/}
		</div>
	);
};
export default torres;
