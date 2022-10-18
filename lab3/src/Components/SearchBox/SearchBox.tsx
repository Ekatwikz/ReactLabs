import React, { useState } from 'react';
import SearchBoxPropsType from './SearchBoxPropsType';

function SearchBox(props: SearchBoxPropsType) {
	let [ tmpSearchValue, setTmpSearchValue ] = useState("");

	return (
		<>
			<input type="text" placeholder="Search cars"
				value={tmpSearchValue} onChange={e => setTmpSearchValue(e.target.value) } />
			<input type="button" value="Search" onClick={e => props.setSearchValue(tmpSearchValue)}/>
		</>
	);
}

export default SearchBox;
