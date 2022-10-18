import React from 'react';
import PriceBoxPropsType from './PriceBoxPropsType';
import './PriceBox.css'

function PriceBox(props: PriceBoxPropsType) {
	return (
		<>
			{
				props.isEditing ?
					<input className="priceBox" type="text" placeholder={`${props.car.name} price`}
						value={props.priceEdit} onChange={e => props.setPriceEdit(e.target.value)} />
					:
					<h4>
						{props.car.pricePerDay}PLN
					</h4>
			}
		</>
	);
}

export default PriceBox;