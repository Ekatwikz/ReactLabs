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
		["Email can't be blank", false]
	]);

	setStepValidator(() => {
		let newValidationError = false;
		let [firstNameInvalid, lastNameInvalid, emailInvalid] = validationErrors;

		if (userInfo.firstName === "") {
			firstNameInvalid[1] = true;
			newValidationError = true;
		} else {
			firstNameInvalid[1] = false;
		}

		if (userInfo.lastName === "") {
			lastNameInvalid[1] = true;
			newValidationError = true;
		} else {
			lastNameInvalid[1] = false;
		}

		if (userInfo.email === "") {
			emailInvalid[1] = true;
			newValidationError = true;
		} else {
			emailInvalid[1] = false;
		}

		setValidationErrors([firstNameInvalid, lastNameInvalid, emailInvalid]);
		return !newValidationError;
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

export default NameStep;
