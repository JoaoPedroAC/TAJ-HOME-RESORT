import React from 'react';
import { render } from './static.js';
import './bem.css';
function BemEstar(props) {
	return (
		<div className='area-bem-estar'>
			<h2>
				Providenciamos os melhores <br />
				serviços para o seu bem-estar.
			</h2>
			<div className='area-imagens-flex'>
				<div className='area-imagens-bem-estar'>
					{render.map((obj, index) => (
						<div className='container-imagens' key={index}>
							{/* precisa por o caminho das imagens dentro do arquivo static.js e precisamos definir o tamanho delas */}
							<img src={obj.image} className='area-imagens'/>
							<p className='area-p'>{obj.frase}</p>
						</div>
					))}
				</div>
				{/* area-imagens-bem-estar */}
			</div>
			{/* area-imagens-flex */}
		</div>
		// area-bem-estar
	);
}
export default BemEstar;
