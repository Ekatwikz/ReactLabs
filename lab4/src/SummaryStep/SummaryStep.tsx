import React from 'react'
import { UserInfo, UserAddresses } from '../UserTypes/UserTypes'

type SummaryStepProps = {
	userInfo: UserInfo,
	userAddresses: UserAddresses,
	setStepValidator: (validator: () => boolean) => void
}

function SummaryStep ({ userInfo, userAddresses, setStepValidator }: SummaryStepProps) {
	setStepValidator(() => true); // lol

	return (
		<section>
			<h2>Summary</h2>

			<h3>User Info</h3>
			<label>First Name: {userInfo.firstName}</label><br/>
			<label>Last Name: {userInfo.lastName}</label><br/>
			<label>Email: {userInfo.email}</label><br/>

			<h3>Addresses</h3>
			<h3>Delivery</h3>
			<label>Street: {userAddresses.delivery.street}</label><br/>
			<label>Zip Code: {userAddresses.delivery.zipCode}</label><br/>
			<label>City: {userAddresses.delivery.city}</label>

			<h3>Invoice</h3>
			<label>Street: {userAddresses.invoice.street}</label><br/>
			<label>Zip Code: {userAddresses.invoice.zipCode}</label><br/>
			<label>City: {userAddresses.invoice.city}</label>
		</section>
	);
}

export default SummaryStep;
