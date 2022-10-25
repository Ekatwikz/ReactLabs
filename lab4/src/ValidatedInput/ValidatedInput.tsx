import React from 'react'
import './ValidatedInput.css';

type PossibleError = [
	string, // errorText
	boolean // errHasOccured
]

type ValidatedInputProps = {
	value: string,
	placeholder: string,
	onChange: (val: React.ChangeEvent<HTMLInputElement>) => void, // eww
	disabled?: boolean,
	possibleError: PossibleError
}

function ValidatedInput ({ value, onChange, placeholder, disabled, possibleError }: ValidatedInputProps) {
	return (
		<>
			<input value={value} onChange={e => onChange(e)} disabled={disabled} placeholder={placeholder}/>
			{
				possibleError[1] ?
					<>
						<br/>
						<span className="validationError">
							{possibleError[0]}
						</span>
					</>
					: null
			}
			<br/>
		</>
	);
}

export { ValidatedInput as default, type PossibleError };
