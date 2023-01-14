import { Text, View, Image } from 'react-native';
import { type RouteProp } from '@react-navigation/native';

import { styles } from './styles'
import { type SimpleCountry } from './types'

function CountryDetailsScreen({ route }:
    {
        route?: RouteProp<{
            CountryDetailsScreen: SimpleCountry;
        }>
    }) {

    const country = route!.params; // :(

    return (
        <View style={styles.container}>
            <Image
                accessibilityLabel={`${country.name.common}'s Flag`}
                source={{ uri: `https://flagcdn.com/192x144/${country.cca2.toLowerCase()}.png` }}
                style={{ width: 192, height: 144 }}
            />
            <Text style={styles.content}>{country.name.common}</Text>
            <Text style={styles.mediumContent}>
                {
                    `is ${country.independent ? "an " : "a non-"}independent country`
                    + ` which is${country.landlocked ? "" : "n't"} landlocked\n`
                    + `and is${country.unMember ? "" : "n't"} a member state of the UN.\n`
                    + `It is in ${country.subregion}, which is in the region of ${country.region}`
                    + `, and its capital is ${country.capital}.`
                }
            </Text>
        </View>
    );
}

export default CountryDetailsScreen;