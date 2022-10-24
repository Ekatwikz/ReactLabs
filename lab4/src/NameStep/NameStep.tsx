import React, { useState } from 'react'
import ErrorBox from '../Error/Error';

function NameStep ({ firstName, setFirstName, lastName, setLastName, email, setEmail, setStepValidator }: any) {
	const [firstNameInvalid, setFirstNameInvalid] = useState(false);
	const [lastNameInvalid, setLastNameInvalid] = useState(false);
	const [emailInvalid, setEmailInvalid] = useState(false);

	setStepValidator(() => {
		let newValidationError = false;

		if (firstName === "") {
			setFirstNameInvalid(true);
			newValidationError = true;
		} else {
			setFirstNameInvalid(false);
		}

		if (lastName === "") {
			setLastNameInvalid(true);
			newValidationError = true;
		} else {
			setLastNameInvalid(false);
		}

		if (email === "") {
			setEmailInvalid(true);
			newValidationError = true;
		} else {
			setEmailInvalid(false);
		}

		return !newValidationError;
	});

	return (
		<section>
			<h2>Name</h2>
			<input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
			<input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
			<input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>

			<ErrorBox possibleErrors={[
				[ "First name can't be blank", firstNameInvalid ],
				[ "Last name can't be blank", lastNameInvalid ],
				[ "Email can't be blank", emailInvalid ]
			]}/>
		</section>
	);
}

export default NameStep;
