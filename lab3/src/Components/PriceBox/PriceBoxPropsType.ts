import { Car } from '../../data/Car';

type PriceBoxPropsType = {
	car: Car;
	priceEdit: string;
	setPriceEdit: (value: string) => void;
	isEditing: boolean;	
}

export default PriceBoxPropsType;