import React from 'react'
import { UserInfo, UserAddress } from '../UserTypes/UserTypes'

type SummaryStepProps = {
	userInfo: UserInfo,
	userAddress: UserAddress,
	setStepValidator: (validator: () => boolean) => void
}

function SummaryStep ({ userInfo, userAddress, setStepValidator }: SummaryStepProps) {
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
			<label>Street: {userAddress.delivery.street}</label><br/>
			<label>Zip Code: {userAddress.delivery.zipCode}</label><br/>
			<label>City: {userAddress.delivery.city}</label>

			<h3>Invoice</h3>
			<label>Street: {userAddress.invoice.street}</label><br/>
			<label>Zip Code: {userAddress.invoice.zipCode}</label><br/>
			<label>City: {userAddress.invoice.city}</label>
		</section>
	);
}

export default SummaryStep;
