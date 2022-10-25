import React from 'react'
import './ValidatedInput.css';

type PossibleError = [
	string, // errorText
	boolean // errorOccured
]

type ValidatedInputProps = {
	value: string,
	placeholder: string,
	onChange: (val: React.ChangeEvent<HTMLInputElement>) => void, // eww
	disabled?: boolean,
	possibleError: PossibleError
}

function ValidatedInput ({ value, onChange, placeholder, disabled, possibleError }: ValidatedInputProps) {
	let [ errorText, errorOccured ] = possibleError;

	return (
		<>
			<input value={value} onChange={e => onChange(e)} disabled={disabled} placeholder={placeholder}/>
			{
				errorOccured ?
					<>
						<br/>
						<span className="validationError">
							{errorText}
						</span>
					</>
					: null
			}
			<br/>
		</>
	);
}

export { ValidatedInput as default, type PossibleError };
