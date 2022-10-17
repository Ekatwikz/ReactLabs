import React from 'react';

// this is so tiny is it even necessary lol
function SearchBox (props) {
	return (
		<input type="text" placeholder="Search"
			value={props.filterText} onChange={e => props.setSearchValue(e.target.value)} />
	);
}

export default SearchBox;
