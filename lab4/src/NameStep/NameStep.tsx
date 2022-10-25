import React, { useState } from 'react'
import { UserInfo } from '../UserTypes/UserTypes'
import ValidatedInput, { PossibleError } from '../ValidatedInput/ValidatedInput'

type NameStepProps = {
	userInfo: UserInfo,
	setUserInfo: (userInfo: UserInfo) => void,
	setStepValidator: (validator: () => boolean) => void
}

function NameStep({ userInfo, setUserInfo, setStepValidator }: NameStepProps) {
	const [[firstNameInvalid, lastNameInvalid, emailInvalid], setValidationErrors] = useState<PossibleError[]>([
		["First name can't be blank", false],
		["Last name can't be blank", false],
		["Email is invalid", false]
	]);

	setStepValidator(() => {
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

			<form>
				<ValidatedInput placeholder="First Name"
					value={userInfo.firstName}
					onChange={e => setUserInfo({ ...userInfo, firstName: e.target.value })}
					possibleError={firstNameInvalid}/>
				<ValidatedInput placeholder="Last Name"
					value={userInfo.lastName}
					onChange={e => setUserInfo({ ...userInfo, lastName: e.target.value })}
					possibleError={lastNameInvalid}/>
				<ValidatedInput placeholder="Email"
					value={userInfo.email}
					onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
					possibleError={emailInvalid}/>
			</form>
		</section>
	);
}

function validEmail(str: string) {
	return str
	.toLowerCase()
	.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

export default NameStep;
