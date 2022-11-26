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

function imageExists(url) {
	const img = new Image();
	img.src = url; // this might not load fast enough?
	return img.height !== 0;
}

function getFlag(code) {
	const req = `https://countryflagsapi.com/png/${code}`;
	return imageExists(req) ? req : "https://i.imgur.com/cS4TG2K.png";
}

function getName(code) {
	return Object.keys(countries).indexOf(code) < 0 ? code : countries[code];
}

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
