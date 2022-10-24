import React, { useState } from 'react'
import NameStep from '../NameStep/NameStep'
import AddressStep from '../AddressStep/AddressStep'
import SummaryStep from '../SummaryStep/SummaryStep'

function CustomerForm() {
	const [step, setStep, setStepValidator] = useStep(0);

	// Name
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	// Address
	const [deliveryStreet, setDeliveryStreet] = useState('');
	const [deliveryCity, setDeliveryCity] = useState('');
	const [deliveryZipCode, setDeliveryZipCode] = useState('');
	const [invoiceStreet, setInvoiceStreet] = useState('');
	const [invoiceCity, setInvoiceCity] = useState('');
	const [invoiceZipCode, setInvoiceZipCode] = useState('');

	const [sameAddress, setSameAddress] = useState(false);

	return (
		<>
			{
				[
					<NameStep firstName={firstName} setFirstName={setFirstName}
						lastName={lastName} setLastName={setLastName} 
						email={email} setEmail={setEmail}
						setStepValidator={(val: () => boolean) => setStepValidator(0, val)} />,

						<AddressStep setDeliveryCity={setDeliveryCity} setDeliveryZipCode={setDeliveryZipCode} 
							setDeliveryStreet={setDeliveryStreet} setInvoiceCity={setInvoiceCity} setInvoiceStreet={setInvoiceStreet}
							setInvoiceZipCode={setInvoiceZipCode} deliveryCity={deliveryCity} deliveryStreet={deliveryStreet}
							deliveryZipCode={deliveryZipCode} invoiceCity={invoiceCity} invoiceStreet={invoiceStreet} 
							invoiceZipCode={invoiceZipCode} sameAddress={sameAddress}
							setSameAddress={setSameAddress}
							setStepValidator={(val: () => boolean) => setStepValidator(1, val)} />,

							<SummaryStep firstName={firstName} lastName={lastName} email={email} deliveryCity={deliveryCity}
								deliveryZipCode={deliveryZipCode} deliveryStreet={deliveryStreet} invoiceCity={invoiceCity}
								invoiceStreet={invoiceStreet} invoiceZipCode={invoiceZipCode}
								setStepValidator={(val: () => boolean) => setStepValidator(2, val)} />
				][step]
			}

			<input type="button" value="Prev" onClick={() => setStep(step - 1)} disabled={step <= 0}/>
			<input type="button" value="Next" onClick={() => setStep(step + 1)} disabled={step >= 2}/>
		</>
	)
}

let stepValidators: {(): boolean}[] = [];
function useStep(initialStep: number) {
	const [step, setStep] = useState(initialStep);

	function mySetStep(newStep: number) {
		if (stepValidators[step]()) {
			setStep(newStep);
		}
	}

	function mySetStepValidator(step: number, validator: () => boolean) {
		stepValidators[step] = validator;
	}

	return [step, mySetStep, mySetStepValidator] as const;
}

export default CustomerForm;
