import React, { useState , useEffect } from 'react';
import PriceEditBox from '../PriceEditBox/PriceEditBox';

function CarListItem(props) {
	let [isEditing, setIsEditing] = useState(false);
	let [priceEdit, setPriceEdit] = useState(props.car.pricePerDay.toString());
	
	return (
		<>
			<fieldset>
				<label>
					{props.car.name}
				</label>
				<br/>
				
				{
				isEditing ?
				<PriceEditBox priceEdit={priceEdit} setPriceEdit={setPriceEdit} car={props.car}/> :
				<label>
					${props.car.pricePerDay}
				</label>
				}
				<br/>

				<img src={props.car.image} alt={props.car.name + " image"} height="50px"/>
				<br/>

				<button onClick={() => props.deleteCar(props.car)}>Delete</button>
				<button onClick={() => {
					if (isEditing) {
						props.editCarPrice(props.car, priceEdit);
						console.log("tmp");
					}
					
					setIsEditing(!isEditing)
				}}>{isEditing ? "Save" : "Edit Price"}</button>
			</fieldset>
		</>
	);
}

export default CarListItem;
