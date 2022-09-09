import React from 'react';
/* funçao de quebra de linha, ela vai colocar a quantidade de quebra de linha que for determinada no parametro */
export const espaco = (index = 0, tag) => {
	tag = [];
	for (let i = 0; i <= index; i++) {
		tag.push(<br key={i} />);
	}
	return tag;
};
