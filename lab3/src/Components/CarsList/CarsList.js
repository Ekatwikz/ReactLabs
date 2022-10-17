import React from 'react';
import CarListItem from '../CarListItem/CarListItem';
import SearchBox from '../SearchBox/SearchBox';
import carsSource from '../../data/cars.json'
import { useState } from 'react';

function CarsList () {
	let [cars, setCars] = useState(carsSource);
	let [searchValue, setSearchValue] = useState('');

	let searchText = searchValue.toLowerCase();

	function deleteCar(car) {
		setCars(cars.filter(c => c !== car));
	}

	function editCarPrice(car, priceEdit) {
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
					<CarListItem key={i} car={car} editCarPrice={editCarPrice} searchText={searchText} deleteCar={deleteCar}/>
						: null
				)
			}
		</>
	);
}

export default CarsList;