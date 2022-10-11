function Player(props) {
	return (
		<div className="Player">
			<h2>Player {props.playerNumStr}</h2>
			<p>
				<span>Name {props.playerName}</span><br/>
				<span>Played {props.playCount} times</span>
				<input type="button" disabled={props.isPlaying} value={props.isPlaying ? "Now Playing" : "Play"} onClick={e => props.togglePlayer(props.playerNum)}/>
			</p>
		</div>
	);
}

export default Player;
