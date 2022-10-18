import React, { useState } from 'react';
import SearchBoxPropsType from './SearchBoxPropsType';
import './SearchBox.css'

function SearchBox(props: SearchBoxPropsType) {
	let [tmpSearchValue, setTmpSearchValue] = useState("");

	return (
		<>
			<input type="text" placeholder="Search cars"
				value={tmpSearchValue} onChange={e => setTmpSearchValue(e.target.value)}
				className="searchBox" />
			<input type="button" value="Search" onClick={e => props.setSearchValue(tmpSearchValue)}
				className="searchButton" />
		</>
	);
}

export default SearchBox;
