import React, { useState } from 'react'
import NameStep from '../NameStep/NameStep'
import AddressStep from '../AddressStep/AddressStep'
import SummaryStep from '../SummaryStep/SummaryStep'
import { UserInfo, UserAddresses } from '../UserTypes/UserTypes'

function CustomerForm() {
	const [step, setStep, setStepValidator] = useStep(0);
	const [userInfo, setUserInfo] = useState<UserInfo>({firstName: "", lastName: "", email: ""});
	const [userAddresses, setUserAddresses ] = useState<UserAddresses>({ delivery: {street: "", city: "", zipCode: ""}, invoice: {street: "", city: "", zipCode: ""}});
	const [sameAsDelivery, setSameAsDelivery] = useState(false);

	return (
		<>
			{
				[
					<NameStep userInfo={userInfo} setUserInfo={setUserInfo}
						setStepValidator={(validator: () => boolean) => setStepValidator(0, validator)} />,
					<AddressStep userAddresses={userAddresses} setUserAddresses={setUserAddresses}
						sameAsDelivery={sameAsDelivery} setSameAsDelivery={setSameAsDelivery}
						setStepValidator={(validator: () => boolean) => setStepValidator(1, validator)} />,
					<SummaryStep userInfo={userInfo} userAddresses={userAddresses}
						setStepValidator={(validator: () => boolean) => setStepValidator(2, validator)} />
				][step]
			}

			<input type="button" value="Prev" onClick={() => setStep(step - 1)} disabled={step <= 0} />
			<input type="button" value="Next" onClick={() => setStep(step + 1)} disabled={step >= 2} />
		</>
	)
}

let stepValidators: { (): boolean }[] = [];
function useStep(initialStep: number) {
	const [step, setStep] = useState(initialStep);

	function mySetStep(newStep: number) {
		if (newStep < step || stepValidators[step]()) {
			setStep(newStep);
		}
	}

	function setStepValidator(step: number, validator: () => boolean) {
		stepValidators[step] = validator;
	}

	return [step, mySetStep, setStepValidator] as const;
}

export default CustomerForm;
