import React, { useState } from 'react';
import PriceEditBox from '../PriceEditBox/PriceEditBox';
import CarListItemPropsType from './CarListItemPropsType';
import './CarListItem.css'

function CarListItem(props: CarListItemPropsType) {
	let [isEditing, setIsEditing] = useState(false);
	let [priceEdit, setPriceEdit] = useState(props.car.pricePerDay.toString());

	return (
		<div className="car-box">
			<img src={props.car.image} alt={props.car.name + " image"} height="50px" />

			<h2>
				{props.car.name}
			</h2>

			<label>
				{props.car.seats} seats
			</label>
			<br />

			<label>
				{props.car.doors} doors
			</label>
			<br />

			<label>
				{props.car.AC ? "Air" : "No air"} conditioning
			</label>

			{
				isEditing ?
					<PriceEditBox priceEdit={priceEdit} setPriceEdit={setPriceEdit} car={props.car} />
					:
					<h4>
						${props.car.pricePerDay}
					</h4>
			}

			<input type="button" value="Delete" onClick={() => props.deleteCar(props.car)} />
			<input type="button" value={isEditing ? "Save" : "Edit Price"} onClick={() => {
				if (isEditing) {
					props.editCarPrice(props.car, priceEdit);
				}

				setIsEditing(!isEditing)
			}} />
		</div>
	);
}

export default CarListItem;
