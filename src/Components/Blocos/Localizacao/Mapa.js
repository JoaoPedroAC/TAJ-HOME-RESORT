import React from 'react';
function Mapa(props) {
	return (
		<div>
			<iframe className={props.className}
				frameBorder='0'
				scrolling='no'
				marginHeight='0'
				marginWidth='0'
				id='gmap_canvas'
				src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=taj%20home%20Vila%20Velha+(Taj%20Home%20Resort)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
			<script
				type='text/javascript'
				src='https://embedmaps.com/google-maps-authorization/script.js?id=283ae6a00e6e4f822cf3f3fb98e55b816aea2d1d'></script>
		</div>
	);
}
export default Mapa;
