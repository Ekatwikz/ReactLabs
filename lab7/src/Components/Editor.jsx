import "./Component.css";

import { stadiumAtom, teamsAtom, countriesSelector } from '../atoms';
import { useRecoilState } from 'recoil';

function Editor() {
	const [, setStadium] = useRecoilState(stadiumAtom);
	const [teams, setTeams] = useRecoilState(teamsAtom);
	const [countries] = useRecoilState(countriesSelector);

	return (
		<section className="Editor">
			<h2>Editor</h2>

			<div className="LilComponent">
				<h3>Country Codes:</h3>

				<div>
					<span>Team1:</span>
					<input type="text" onChange={e =>
							setTeams({
								...teams,
								teamA: { ...teams.teamA,
									code: e.target.value.toUpperCase()
								}
							})
						}/>
				</div>
				<div>
					<span>Team2:</span>
					<input type="text" onChange={e =>
							setTeams({
								...teams,
								teamB: { ...teams.teamB,
									code: e.target.value.toUpperCase()
								}
							})
						}/>
				</div>
			</div>

			<div className="LilComponent">
				<h3>Stadium</h3>
				<input type="text" onChange={e => setStadium(e.target.value)}/>
			</div>

			<div className="LilComponent">
				<h3>++Goal</h3>

				<input type="button" value={`Goal for ${countries.countryA.name}`}
					onClick={e =>
							setTeams({
								...teams,
								teamA: { ...teams.teamA,
									score: teams.teamA.score + 1
								}
							})
					}/>
				<input type="button" value={`Goal for ${countries.countryB.name}`}
					onClick={e =>
							setTeams({
								...teams,
								teamB: { ...teams.teamB,
									score: teams.teamB.score + 1
								}
							})
					}/>
			</div>
		</section>
	);
}

export default Editor;
