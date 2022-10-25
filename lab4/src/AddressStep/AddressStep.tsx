import React, { useState } from 'react'
import { UserAddress, PartialUserAddress } from '../UserTypes/UserTypes'
import ValidatedInput, { PossibleError } from '../ValidatedInput/ValidatedInput'

type AddressStepProps = {
	userAddress: UserAddress,
	setUserAddress: (userAddress: UserAddress) => void,
	sameAsDelivery: boolean,
	setSameAsDelivery: (val: boolean) => void;
	setStepValidator: (validator: () => boolean) => void
}

function AddressStep({ userAddress, setUserAddress, sameAsDelivery, setSameAsDelivery, setStepValidator }: AddressStepProps) {
	const [[deliveryStreetInvalid, deliveryZipCodeInvalid, deliveryCityInvalid,
		invoiceStreetInvalid, invoiceZipCodeInvalid, invoiceCityInvalid], setValidationErrors] = useState<PossibleError[]>([
		["Delivery street can't be blank", false],
		["Delivery zip code is invalid (format: DD-DDD)", false],
		["Delivery city can't be blank", false],

		["Invoice street can't be blank", false],
		["Invoice zip code is invalid (format: DD-DDD)", false],
		["Invoice city can't be blank", false]
	]);

	setStepValidator(() => {
		deliveryStreetInvalid[1] = userAddress.delivery.street === "";
		deliveryZipCodeInvalid[1] = !validZipCode(userAddress.delivery.zipCode);
		deliveryCityInvalid[1] = userAddress.delivery.city === "";

		invoiceStreetInvalid[1] = !sameAsDelivery && userAddress.invoice.street === "";
		invoiceZipCodeInvalid[1] = !sameAsDelivery && !validZipCode(userAddress.invoice.zipCode);
		invoiceCityInvalid[1] = !sameAsDelivery && userAddress.invoice.city === "";

		let newValidationErrors = [deliveryStreetInvalid, deliveryZipCodeInvalid, deliveryCityInvalid,
			invoiceStreetInvalid, invoiceZipCodeInvalid, invoiceCityInvalid];
		setValidationErrors(newValidationErrors);
		return newValidationErrors.findIndex(err => err[1] === true) < 0;
	});

	return (
		<section>
			<h2>Address</h2>

			<h4>Delivery</h4>
			<form>
				<ValidatedInput placeholder="Street"
					value={userAddress.delivery.street}
					possibleError={deliveryStreetInvalid}
					onChange={e => updateAddresses({ delivery: { street: e.target.value } })}/>
				<ValidatedInput placeholder="Zip Code"
					value={userAddress.delivery.zipCode}
					possibleError={deliveryZipCodeInvalid}
					onChange={e => updateAddresses({ delivery: { zipCode: e.target.value } })}/>
				<ValidatedInput placeholder="City"
					value={userAddress.delivery.city}
					possibleError={deliveryCityInvalid}
					onChange={e => updateAddresses({ delivery: { city: e.target.value } })}/>
			</form>

			<h4>Invoice</h4>
			<form>
				<ValidatedInput placeholder="Street"
					value={userAddress.invoice.street}
					possibleError={invoiceStreetInvalid}
					onChange={e => updateAddresses({ invoice: { street: e.target.value } })}
					disabled={sameAsDelivery}/>
				<ValidatedInput placeholder="Zip Code"
					value={userAddress.invoice.zipCode}
					possibleError={invoiceZipCodeInvalid}
					onChange={e => updateAddresses({ invoice: { zipCode: e.target.value } })}
					disabled={sameAsDelivery}/>
				<ValidatedInput placeholder="City"
					value={userAddress.invoice.city}
					possibleError={invoiceCityInvalid}
					onChange={e => updateAddresses({ invoice: { city: e.target.value } })}
					disabled={sameAsDelivery}/>

				<label>(Same as delivery address)</label>
				<input type="checkbox" checked={sameAsDelivery}
					onChange={() => {
						if (!sameAsDelivery) {
							setUserAddress({ delivery: { ...userAddress.delivery }, invoice: { ...userAddress.delivery } })
						}
						setSameAsDelivery(!sameAsDelivery)
					}} />
			</form>
		</section>
	);

	function updateAddresses(partialAddress: PartialUserAddress) {
		let newDeliveryAddr = { ...userAddress.delivery, ...partialAddress.delivery };
		setUserAddress(partialAddress.delivery ?
			{delivery: newDeliveryAddr, invoice: { ...(sameAsDelivery ? newDeliveryAddr : userAddress.invoice) }}
			: {delivery: { ...userAddress.delivery }, invoice: { ...userAddress.invoice, ...partialAddress.invoice }});
		// SPREAD EM :O
	}
}

function validZipCode(str: string) {
	return str.match(/(^\d{2}-\d{3}$)/);
}

export default AddressStep;
