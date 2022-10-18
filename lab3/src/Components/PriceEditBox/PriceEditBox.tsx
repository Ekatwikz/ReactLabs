import React from 'react';
import PriceEditPropsType from './PriceEditPropsType';

function PriceEditBox (props: PriceEditPropsType) {
	return (
		<input type="text" placeholder={`New ${props.car.name} price`}
			value={props.priceEdit} onChange={e => props.setPriceEdit(e.target.value)} />
	);
}

export default PriceEditBox;
