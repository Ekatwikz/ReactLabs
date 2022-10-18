import { Car } from '../../data/Car';

type PriceEditPropsType = {
	car: Car;
	priceEdit: string;
	setPriceEdit: (value: string) => void;
}

export default PriceEditPropsType;