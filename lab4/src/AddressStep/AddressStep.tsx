import React, { useState } from 'react'
import { UserAddresses } from '../UserTypes/UserTypes'
import ErrorBox, { PossibleError } from '../ErrorBox/ErrorBox';

type AddressStepProps = {
	userAddresses: UserAddresses,
	setUserAddresses: (userAddresses: UserAddresses) => void,
	setStepValidator: (validator: () => boolean) => void
}

function AddressStep({ userAddresses, setUserAddresses, setStepValidator }: AddressStepProps) {
	const [sameAsDelivery, setSameAsDelivery] = useState(false);

	const [validationErrors, setValidationErrors] = useState<PossibleError[]>([
		["Delivery street can't be blank", false],
		["Delivery zip code can't be blank", false],
		["Delivery city can't be blank", false],

		["Invoice street can't be blank", false],
		["Invoice zip code can't be blank", false],
		["Invoice city can't be blank", false]
	]);

	setStepValidator(() => {
		let newValidationError = false;
		let [deliveryStreetInvalid, deliveryZipCodeInvalid, deliveryCityInvalid, invoiceStreetInvalid, invoiceZipCodeInvalid, invoiceCityInvalid] = validationErrors;


		return !newValidationError;
	});

	return (
		<section>
			<h2>Address</h2>

			<h4>Delivery</h4>
			<form>
				<input type="text" placeholder="Street"
					value={userAddresses.delivery.street}
					onChange={e => {
						let newInvoiceAddr = userAddresses.invoice;
						if (sameAsDelivery) {
							newInvoiceAddr = {...newInvoiceAddr, street: e.target.value}
						}
						setUserAddresses({ delivery: { ...userAddresses.delivery, street: e.target.value }, invoice: newInvoiceAddr })}
					}/><br />
				<input type="text" placeholder="Zip Code"
					value={userAddresses.delivery.zipCode}
					onChange={e => setUserAddresses({ delivery: { ...userAddresses.delivery, zipCode: e.target.value }, invoice: userAddresses.invoice })} /><br />
				<input type="text" placeholder="City"
					value={userAddresses.delivery.city}
					onChange={e => setUserAddresses({ delivery: { ...userAddresses.delivery, city: e.target.value }, invoice: userAddresses.invoice })} />
			</form>

			<h4>Invoice</h4>
			<form>
				<input type="text" placeholder="Street"
					disabled={sameAsDelivery}
					value={userAddresses.invoice.street}
					onChange={e => setUserAddresses({ invoice: { ...userAddresses.invoice, street: e.target.value }, delivery: userAddresses.delivery })} /><br />
				<input type="text" placeholder="Zip Code"
					disabled={sameAsDelivery}
					value={userAddresses.invoice.zipCode}
					onChange={e => setUserAddresses({ invoice: { ...userAddresses.invoice, zipCode: e.target.value }, delivery: userAddresses.delivery })} /><br />
				<input type="text" placeholder="City"
					disabled={sameAsDelivery}
					value={userAddresses.invoice.city}
					onChange={e => setUserAddresses({ invoice: { ...userAddresses.invoice, city: e.target.value }, delivery: userAddresses.delivery })} />
				<br />

				<label>(Same as delivery address)</label>
				<input type="checkbox" checked={sameAsDelivery}
				onChange={() => {
					if (!sameAsDelivery) {
						setUserAddresses({ delivery: userAddresses.delivery, invoice: userAddresses.delivery })
					}
					setSameAsDelivery(!sameAsDelivery)
				}}/>
			</form>

		</section>
	);
}

export default AddressStep;
