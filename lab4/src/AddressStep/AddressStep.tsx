import React, { useState } from 'react'
import { UserAddresses, PartialUserAddress } from '../UserTypes/UserTypes'
import ErrorBox, { PossibleError } from '../ErrorBox/ErrorBox';

type AddressStepProps = {
	userAddresses: UserAddresses,
	setUserAddresses: (userAddresses: UserAddresses) => void,
	sameAsDelivery: boolean,
	setSameAsDelivery: (val: boolean) => void;
	setStepValidator: (validator: () => boolean) => void
}

function AddressStep({ userAddresses, setUserAddresses, sameAsDelivery, setSameAsDelivery, setStepValidator }: AddressStepProps) {
	const [validationErrors, setValidationErrors] = useState<PossibleError[]>([
		["Delivery street can't be blank", false],
		["Delivery zip code is invalid (format: DD-DDD)", false],
		["Delivery city can't be blank", false],

		["Invoice street can't be blank", false],
		["Invoice zip code is invalid (format: DD-DDD)", false],
		["Invoice city can't be blank", false]
	]);

	setStepValidator(() => {
		let [deliveryStreetInvalid, deliveryZipCodeInvalid, deliveryCityInvalid,
			invoiceStreetInvalid, invoiceZipCodeInvalid, invoiceCityInvalid] = validationErrors;

		deliveryStreetInvalid[1] = userAddresses.delivery.street === "";
		deliveryZipCodeInvalid[1] = !validZipCode(userAddresses.delivery.zipCode);
		deliveryCityInvalid[1] = userAddresses.delivery.city === "";

		invoiceStreetInvalid[1] = !sameAsDelivery && userAddresses.invoice.street === "";
		invoiceZipCodeInvalid[1] = !sameAsDelivery && !validZipCode(userAddresses.invoice.zipCode);
		invoiceCityInvalid[1] = !sameAsDelivery && userAddresses.invoice.city === "";

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
				<input type="text" placeholder="Street"
					value={userAddresses.delivery.street}
					onChange={e => updateAddresses({ delivery: { street: e.target.value } })} /><br />
				<input type="text" placeholder="Zip Code"
					value={userAddresses.delivery.zipCode}
					onChange={e => updateAddresses({ delivery: { zipCode: e.target.value } })} /><br />
				<input type="text" placeholder="City"
					value={userAddresses.delivery.city}
					onChange={e => updateAddresses({ delivery: { city: e.target.value } })} />
			</form>

			<h4>Invoice</h4>
			<form>
				<input type="text" placeholder="Street"
					disabled={sameAsDelivery}
					value={userAddresses.invoice.street}
					onChange={e => updateAddresses({ invoice: { street: e.target.value } })} /><br />
				<input type="text" placeholder="Zip Code"
					disabled={sameAsDelivery}
					value={userAddresses.invoice.zipCode}
					onChange={e => updateAddresses({ invoice: { zipCode: e.target.value } })} /><br />
				<input type="text" placeholder="City"
					disabled={sameAsDelivery}
					value={userAddresses.invoice.city}
					onChange={e => updateAddresses({ invoice: { city: e.target.value } })} />
				<br />

				<label>(Same as delivery address)</label>
				<input type="checkbox" checked={sameAsDelivery}
					onChange={() => {
						if (!sameAsDelivery) {
							setUserAddresses({ delivery: { ...userAddresses.delivery }, invoice: { ...userAddresses.delivery } })
						}
						setSameAsDelivery(!sameAsDelivery)
					}} />
			</form>

			<ErrorBox possibleErrors={validationErrors} />
		</section>
	);

	function updateAddresses(partialAddress: PartialUserAddress) {
		const argErr = new Error("Bad argument");

		let newAddresses = { ...userAddresses };
		if (partialAddress.delivery) {
			if (typeof partialAddress.delivery.street === "string") {
				newAddresses.delivery.street = partialAddress.delivery.street;
				if (sameAsDelivery) {
					newAddresses.invoice.street = partialAddress.delivery.street;
				}
			} else if (typeof partialAddress.delivery.city === "string") {
				newAddresses.delivery.city = partialAddress.delivery.city;
				if (sameAsDelivery) {
					newAddresses.invoice.city = partialAddress.delivery.city;
				}
			} else if (typeof partialAddress.delivery.zipCode === "string") {
				newAddresses.delivery.zipCode = partialAddress.delivery.zipCode;
				if (sameAsDelivery) {
					newAddresses.invoice.zipCode = partialAddress.delivery.zipCode;
				}
			} else {
				throw argErr;
			}
		} else if (partialAddress.invoice) {
			if (typeof partialAddress.invoice.street === "string") {
				newAddresses.invoice.street = partialAddress.invoice.street;
			} else if (typeof partialAddress.invoice.city === "string") {
				newAddresses.invoice.city = partialAddress.invoice.city;
			} else if (typeof partialAddress.invoice.zipCode === "string") {
				newAddresses.invoice.zipCode = partialAddress.invoice.zipCode;
			} else {
				throw argErr;
			}
		} else {
			throw argErr;
		}

		setUserAddresses(newAddresses);
	}
}

function validZipCode(str: string) {
	return str.match(/(^\d{2}-\d{3}$)/);
}

export default AddressStep;
