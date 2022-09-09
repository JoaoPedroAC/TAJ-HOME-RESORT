import React, { useState } from 'react';
import './oportunidade.css';
const oportunidades = (props) => {
	const price = '2.047.904,00';
	let progress = 10;
	// const [atual, setAtual] = useState('');
	// const handleClick = (e) => {
	// 	const element = e.target.value;
	// 	return setAtual(element);
	// };

	return (
		<div className='oportunidade-container'>
			<h2>Não perca essa oportunidade única</h2>

			<div className='preco-container'>
				<h3>
					Apartamentos a partir <br />
					de R$ <span>{price}</span>
				</h3>
				<p>Não perca tempo, pois as obras já começaram e estão a todo vapor!</p>

				<label>
					<h3>TORRE LESTE</h3>
					<p>{progress-progress} %</p>
					<input
						type={'range'}
						key=''
						min={0}
						max={100}
						step={10}
						value={progress-progress}
						// onChange={(e) => handleClick(e)}
						readOnly
					/>
				</label>

                <label>
					<h3>TORRE OESTE</h3>
					<p>{progress-progress} %</p>
					<input
						type={'range'}
						key=''
						min={0}
						max={100}
						step={10}
						value={progress-progress}
						// onChange={(e) => handleClick(e)}
						readOnly
					/>
				</label>

                <label>
					<h3>ÁREA COMUM</h3>
					<p>{progress} %</p>
					<input
						type={'range'}
						key=''
						min={0}
						max={100}
						step={10}
						value={progress}
						// onChange={(e) => handleClick(e)}
						readOnly
					/>
				</label>
                <h3>CONHEÇA A TAJ</h3>
			</div>
			{/* preco-container */}
		</div>
		// oportunidade-container
	);
};
export default oportunidades;
