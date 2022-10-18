import React from 'react';
import CarListItem from '../CarListItem/CarListItem';
import SearchBox from '../SearchBox/SearchBox';
import { useState } from 'react';

import { Car, CARS } from '../../data/Car';

function CarsList () {
	let [cars, setCars] = useState(CARS);
	let [searchValue, setSearchValue] = useState('');

	let searchText = searchValue.toLowerCase();

	function deleteCar(car: Car) {
		setCars(cars.filter(currentCar => currentCar !== car));
	}

	function editCarPrice(car: Car, priceEdit: string) {
		let newPrice = parseInt(priceEdit);
		if (!isNaN(newPrice) && newPrice > 0) {
			car.pricePerDay = newPrice;
		}
	}

	return (
		<>
			<SearchBox searchText={searchValue}
				setSearchValue={setSearchValue} />
		
			{
				cars.map((car, i) =>
					searchText === '' || car.name.toLowerCase().indexOf(searchText) !== -1 ?
					<CarListItem key={car.id} car={car} editCarPrice={editCarPrice} deleteCar={deleteCar}/>
						: null
				)
			}
		</>
	);
}

export default CarsList;