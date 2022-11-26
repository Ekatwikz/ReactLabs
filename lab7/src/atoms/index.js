import { atom, selector } from "recoil";

const stadiumAtom = atom({
	key: 'stadiumAtom',
	default: "",
});

const teamsAtom = atom({
	key: `teamAtom`,
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

function getName(code) {
	return code;
}

function getFlag(code) {
	return "https://i.imgur.com/cS4TG2K.png";
}

const countriesSelector = selector({
	key: 'countryNamesSelector',
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
