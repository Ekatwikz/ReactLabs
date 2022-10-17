import React from 'react';

function PriceEditBox (props) {
	return (
		<input type="text" placeholder={`New ${props.car.name} price`}
			value={props.priceEdit} onChange={e => props.setPriceEdit(e.target.value)} />
	);
}

export default PriceEditBox;
