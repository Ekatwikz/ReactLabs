import React from 'react';
import CarListItem from '../CarListItem/CarListItem';
import SearchBox from '../SearchBox/SearchBox';
import { useState } from 'react';
import { Car, CARS } from '../../data/Car';
import './CarsList.css'

function CarsList() {
	let [cars, setCars] = useState(CARS);
	let [searchValue, setSearchValue] = useState('');

	let searchText = searchValue.toLowerCase();

	function deleteCar(car: Car) {
		setCars(cars.filter(currentCar => currentCar.id !== car.id));
	}

	function editCarPrice(car: Car, priceEdit: string) {
		let newPrice = parseInt(priceEdit);
		let newCars = cars.splice(0);
		let theCar = newCars.find(currCar => currCar.id === car.id);

		if (theCar && !isNaN(newPrice) && newPrice > 0) {
			theCar.pricePerDay = newPrice;
			setCars(newCars);
		}
	}

	return (
		<main>
			<SearchBox searchText={searchValue}
				setSearchValue={setSearchValue} />

			{
				cars
					.filter(car => searchText === "" // show all cars if we're not filtering
						|| car.name.toLowerCase().indexOf(searchText) >= 0)
					.map(car => <CarListItem key={car.id} car={car} editCarPrice={editCarPrice} deleteCar={deleteCar} />)
			}
		</main>
	);
}

export default CarsList;