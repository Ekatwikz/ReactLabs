import { NavigationScreenProp } from 'react-navigation';
import { type RouteProp } from '@react-navigation/native';

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

type CountriesScreenProps = {
    navigation: NavigationScreenProp<{
        CountriesScreen: undefined
    }>
}

type CountryDetailsScreenProps = {
    route: RouteProp<{
        CountryDetailsScreen: SimpleCountry;
    }>
}

type StackType = {
    CountriesScreen: undefined;
    CountryDetailsScreen: SimpleCountry
}

export { type SimpleCountry, type CountryDetailsScreenProps, type CountriesScreenProps, type StackType }