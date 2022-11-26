import { atom, selector } from "recoil";
import countries from "../countries";

const stadiumAtom = atom({
	key: "stadiumAtom",
	default: "",
});

const teamsAtom = atom({
	key: "teamsAtom",
	default: {
		teamA: {
			code: "",
			score: 0
		},
		teamB: {
			code: "",
			score: 0
		}
	},
});

const knownCode = code => Object.keys(countries).indexOf(code) >= 0;
const getName = code => knownCode(code) ? countries[code] : code;
const getFlag = code =>
	knownCode(code) ?
		`https://countryflagsapi.com/png/${code}` : "https://i.imgur.com/cS4TG2K.png";

const countriesSelector = selector({
	key: "countryNamesSelector",
	get: ({ get }) => {
		const teams = get(teamsAtom);
		return {
			countryA: {
				name: getName(teams.teamA.code),
				flag: getFlag(teams.teamA.code)
			},
			countryB: {
				name: getName(teams.teamB.code),
				flag: getFlag(teams.teamB.code)
			},
		};
	}
});

export { stadiumAtom, teamsAtom, countriesSelector };
