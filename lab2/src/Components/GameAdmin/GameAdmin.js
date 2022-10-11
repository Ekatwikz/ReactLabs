import Player from '../Player/Player'
import PlayerInput from '../PlayerInput/PlayerInput'
import { useState } from "react";

function GameAdmin() {
	const [player1Name, setPlayer1Name] = useState("");
	const [player2Name, setPlayer2Name] = useState("");

	const [whoIsPlaying, setWhoIsPlaying] = useState(0);
	const [player1Count, setPlayer1Count] = useState(0);
	const [player2Count, setPlayer2Count] = useState(0);
	function togglePlayer (newPlayer) {
		setWhoIsPlaying(newPlayer);
		
		if (newPlayer === 1) {
			setPlayer1Count(player1Count + 1);
		} else if (newPlayer === 2) {
			setPlayer2Count(player2Count + 1);
		}
	}

	return (
		<div className="GameAdmin">
			<Player playerNum={1} playerNumStr="One" playerName={player1Name} isPlaying={whoIsPlaying === 1} togglePlayer={togglePlayer} playCount={player1Count}/>
			<Player playerNum={2} playerNumStr="Two" playerName={player2Name} isPlaying={whoIsPlaying === 2} togglePlayer={togglePlayer} playCount={player2Count}/>
			<hr/>
			<PlayerInput playerNumStr="One" playerName={player1Name} changePlayerName={setPlayer1Name}/>
			<PlayerInput playerNumStr="Two" playerName={player2Name} changePlayerName={setPlayer2Name}/>
		</div>
	);
}

export default GameAdmin;
