import React, { useState } from 'react'
import { UserInfo } from '../UserTypes/UserTypes'
import ErrorBox, { PossibleError } from '../ErrorBox/ErrorBox';

type NameStepProps = {
	userInfo: UserInfo,
	setUserInfo: (userInfo: UserInfo) => void,
	setStepValidator: (validator: () => boolean) => void
}

function NameStep({ userInfo, setUserInfo, setStepValidator }: NameStepProps) {
	const [validationErrors, setValidationErrors] = useState<PossibleError[]>([
		["First name can't be blank", false],
		["Last name can't be blank", false],
		["Email is invalid", false]
	]);

	setStepValidator(() => {
		let [firstNameInvalid, lastNameInvalid, emailInvalid] = validationErrors;

		firstNameInvalid[1] = userInfo.firstName === "";
		lastNameInvalid[1] = userInfo.lastName === "";
		emailInvalid[1] = !validEmail(userInfo.email);

		let newValidationErrors = [firstNameInvalid, lastNameInvalid, emailInvalid];
		setValidationErrors(newValidationErrors);
		return newValidationErrors.findIndex(err => err[1] === true) < 0;
	});

	return (
		<section>
			<h2>Name</h2>
			<input type="text" placeholder="First Name"
				value={userInfo.firstName} onChange={e => setUserInfo({ ...userInfo, firstName: e.target.value })} /><br />
			<input type="text" placeholder="Last Name"
				value={userInfo.lastName} onChange={e => setUserInfo({ ...userInfo, lastName: e.target.value })} /><br />
			<input type="text" placeholder="Email"
				value={userInfo.email} onChange={e => setUserInfo({ ...userInfo, email: e.target.value })} />

			<ErrorBox possibleErrors={validationErrors} />
		</section>
	);
}

function validEmail(str: string) {
	return str
	.toLowerCase()
	.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

export default NameStep;
