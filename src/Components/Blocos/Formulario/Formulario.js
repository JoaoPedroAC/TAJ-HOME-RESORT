import React, { useState } from 'react';
import './formulario.css';
import Botao from '../Botao/Botao.js';
import { numericRuler, addCaracter } from './rulerPhone.js';

// precisa-se criar regra para o input do telefone, para caso escrevam errado alguma coisa ou coloquem string ao inves de numero
// TA COM BUG MAS FOI QUASE
function formulario(props) {
	const [nome, setNome] = useState('');
	const [telefone, setPhone] = useState('');
	const [cidade, setCidade] = useState('');
	const [estado, setEstado] = useState('');
	const [email, setEmail] = useState('');
	const [mensagem, setMensagem] = useState('');

	const onSub = async (e) => {
		e.preventDefault();
		try {
			const urlencoded = new URLSearchParams({
				nome,
				telefone,
				cidade,
				estado,
				email,
				mensagem,
			})
			await fetch('http://localhost:4000/enviar-email', {
				method: 'POST',	body: urlencoded
			});
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className='area-form-flex'>
			<form onSubmit={onSub}>
				<label reactfor='nome'>
					<p>Nome</p>
					<input
						type='text'
						key='nome'
						value={nome}
						onChange={(e) => setNome(e.target.value)}
						placeholder='Nome completo'
						required
					/>
				</label>

				<label reactfor='telefone'>
					<p>Telefone</p>
					<input
						type='text'
						key='telefone'
						maxLength={15}
						placeholder='Telefone com DDD'
						value={telefone}
						onChange={(e) => setPhone(numericRuler(e.target.value))}
						onKeyUp={(e) => setPhone(addCaracter(e))}
						required
					/>
				</label>
				<label reactfor='cidade'>
					<p>Cidade</p>
					<input
						type='text'
						key='cidade'
						value={cidade}
						onChange={(e) => setCidade(e.target.value)}
						required
					/>
				</label>

				<label reactfor='estado'>
					<p>Estado</p>
					<input
						type='text'
						key='estado'
						value={estado}
						onChange={(e) => setEstado(e.target.value)}
						required
					/>
				</label>

				<label reactfor='email'>
					<p>E-mail</p>
					<input
						type='email'
						key='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						placeholder='exemplo@email.com'
					/>
				</label>

				<label reactfor='mensagem'>
					<p>Mensagem</p>
					<textarea
						key='mensagem'
						value={mensagem}
						onChange={(e) => {
							setMensagem(e.target.value);
						}}
						maxLength={500}></textarea>
				</label>

				<label reactfor='termo' className='termo'>
					<input type='checkbox' key='termo' required />
					<p>Aceito receber o contato de um consultor</p>
				</label>

				<Botao
					className='botao-enviar'
					title='ENVIAR'
					type='submit'
					// onClick={onSubmit}
				/>
			</form>
			<div className='contato-texto'>
				<h2>Entre em contato conosco e marque uma visita.</h2>
				<p>
					Não perca a <span className='destaque'>oportunidade</span> de
					proporcionar a você e sua família essa{' '}
					<span className='destaque'>experiência única.</span>
				</p>
				<p>
					Venha visitar o Taj Home Resort e conhecer mais sobre esse{' '}
					<span className='destaque'>paraíso localizado em Vila Velha</span>,
					onde os seus{' '}
					<span className='destaque'>sonhos podem se tornar realidade.</span>
				</p>
				<img
					src={require('../../../assets/imagens/desktop_logo_pequena.png')}
					alt='TAJ'
				/>
			</div>
			<br />
		</div>
	);
}
export default formulario;
