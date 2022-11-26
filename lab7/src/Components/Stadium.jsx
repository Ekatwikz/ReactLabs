import "./Component.css"

import { stadiumAtom, countriesSelector, teamsAtom } from '../atoms';
import { useRecoilState } from 'recoil';

function Stadium() {
	const [stadium] = useRecoilState(stadiumAtom);
	const [teams] = useRecoilState(teamsAtom);
	const [countries] = useRecoilState(countriesSelector);

	return (
		<section className="Stadium">
			<h2>Preview</h2>

			<div className="LilComponent FlagSection">
				<div>
					<img className="Flag"
						src={countries.countryA.flag} height="50px"
						alt={countries.countryA.flag}/>
					<h1>{countries.countryA.name}</h1>
				</div>

				<div>
					<img className="Flag"
						src={countries.countryB.flag} height="50px"
						alt={countries.countryB.flag}/>
					<h1>{countries.countryB.name}</h1>
				</div>
			</div>

			<div className="LilComponent">
				<span>{stadium}</span>
				<h1>{teams.teamA.score} : {teams.teamB.score}</h1>
			</div>
		</section>
	);
}

export default Stadium;
