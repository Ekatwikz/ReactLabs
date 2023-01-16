import { Text, View, Image } from 'react-native';

import { styles } from './styles'
import { type CountryDetailsScreenProps } from './types'

function CountryDetailsScreen({ route: { params: country } }: CountryDetailsScreenProps) {
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
                    `She's ${country.independent ? "an " : "a non-"}independent country`
                    + ` who's${country.landlocked ? "" : " not"} landlocked\n`
                    + `and is${country.unMember ? "" : "n't"} a member state of the UN.\n`
                    + `She's in ${country.subregion}, which is in the region of ${country.region}`
                    + `, and her capital is ${country.capital}.`
                }
            </Text>
        </View>
    );
}

export default CountryDetailsScreen;