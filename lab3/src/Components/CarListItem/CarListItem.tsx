import React, { useState } from 'react';
import PriceBox from '../PriceBox/PriceBox';
import CarListItemPropsType from './CarListItemPropsType';
import './CarListItem.css'

function CarListItem(props: CarListItemPropsType) {
	let [isEditing, setIsEditing] = useState(false);
	let [priceEdit, setPriceEdit] = useState(props.car.pricePerDay.toString());

	return (
		<section className="car-box">
			<img src={props.car.image} alt={props.car.name + " image"} height="90px" />
			<h2>
				{props.car.name}
			</h2>

			<section className="column-flex">
				<label>
					{props.car.seats} seats
				</label>

				<label>
					{props.car.doors} doors
				</label>

				<label>
					{props.car.AC ? "Air conditioned" : "No air conditioning"}
				</label>
			</section>

			<section className="column-flex priceSection">
				<label>
					Price per day
				</label>

				<PriceBox priceEdit={priceEdit} setPriceEdit={setPriceEdit} car={props.car} isEditing={isEditing} />

				<div>
					<input type="button" value={isEditing ? "Save" : "Edit"} onClick={() => {
						if (isEditing) {
							props.editCarPrice(props.car, priceEdit);
						}

						setIsEditing(!isEditing);
					}} className="editButton"/>
					<input type="button" value="Delete" onClick={() => props.deleteCar(props.car)} className="deleteButton"/>
				</div>
			</section>
		</section>
	);
}

export default CarListItem;