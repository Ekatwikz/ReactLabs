import React from 'react'

type PossibleError = [
	string, // errorText
	boolean // errHasOccured
]

function ErrorBox ({ possibleErrors }: { possibleErrors: PossibleError[] }) {
	let hasErrors = possibleErrors.findIndex(err => err[1] === true) > -1;

	return (
		<>
			{
				hasErrors ?
					<section>
						<h3>Error!</h3>
						{
							possibleErrors.map(([errText, errHasOccured], i) => {
								if (errHasOccured) {
									return (
										<div key={i}>
											<span>
												{errText}
											</span>
										</div>
									);
								} else {
									return "";
								}
							})
						}
					</section>
					: null
			}
		</>	
	);
}

export default ErrorBox;
export type { PossibleError };
