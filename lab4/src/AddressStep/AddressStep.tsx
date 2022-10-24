import React from 'react'

function AddressStep ({ setStepValidator }: any) {
	setStepValidator(() => {
		return true;
	});

	return (
		<section>
			<h2>Address</h2>

			<h4>Delivery</h4>
			<form>
				<input type="text" placeholder="Street"/>
				<input type="text" placeholder="Zip Code"/>
				<input type="text" placeholder="City"/>
			</form>

			<h4>Invoice</h4>
			<form>
				<input type="text" placeholder="Street"/>
				<input type="text" placeholder="Zip Code"/>
				<input type="text" placeholder="City"/>
				<br/>

				<label>(Same as delivery address)</label>
				<input type="checkbox"/>
			</form>

		</section>
	);
}

export default AddressStep;
