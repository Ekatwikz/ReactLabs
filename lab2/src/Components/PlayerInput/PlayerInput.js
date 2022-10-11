function PlayerInput(props) {
	return (
		<div className="PlayerInput">
			<span>Set Name of Player {props.playerNum}: </span>
			<input 	type="text" value={props.playerName} onChange={e => props.changePlayerName(e.target.value)}/>
		</div>
	);
}

export default PlayerInput;
