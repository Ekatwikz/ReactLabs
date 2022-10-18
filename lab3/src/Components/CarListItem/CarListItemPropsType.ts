import { Car } from '../../data/Car';

type CarListItemPropsType = {
	car: Car;
    deleteCar: (car: Car) => void;
    editCarPrice: (car: Car, newPrice: string) => void;
}

export default CarListItemPropsType;