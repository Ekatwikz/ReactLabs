type SimpleCountry = {
    name: {
        common: string;
    }
    cca2: string,

    capital: string,
    region: string,
    subregion: string,

    independent: boolean,
    unMember: boolean,
    landlocked: boolean
}

export { type SimpleCountry }