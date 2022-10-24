import React from 'react'

function SummaryStep ({ setStepValidator }: any) {
	setStepValidator(() => {
		return true;
	});

	return (
		<section>
			<h2>Summary</h2>
		</section>
	);
}

export default SummaryStep;
