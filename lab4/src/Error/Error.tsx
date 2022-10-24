import React from 'react'

type PossibleError = [ 
	string, // errorText
	boolean // hasOccured
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
							possibleErrors.map((err, i) => {
								if (err[1]) {
									return (
										<div key={i}>
											<label>
												{err[0]}
											</label>
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
