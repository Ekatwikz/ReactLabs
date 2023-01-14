import { useEffect, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { getFromURL, getFromURLAndSleep } from './utils'
import { styles } from './styles'
import { type SimpleCountry } from './types'

function CountriesScreen({ navigation }:
    {
        navigation: NavigationScreenProp<{
            CountriesScreen: undefined
        }>
    }) {

    const [countries, setCountries] = useState<SimpleCountry[]>([]);
    const [searchText, setSearchText] = useState("");

    const [loading, setLoading] = useState(true);
    const [badResponse, setBadResponse] = useState(false);

    const refreshCountries = () => {
        if (searchText.length >= 3) {
            setLoading(true);

            getFromURL(`https://restcountries.com/v3.1/name/${searchText}`)
                .then((countryArray: SimpleCountry[]) => {
                    setBadResponse(false);
                    setCountries(countryArray)
                })
                .catch(_ => {
                    setBadResponse(true);
                    setCountries([]);
                })
                .then(_ => setLoading(false));
        }

        // also works if you're trying to go back to seeing everything after searching something
        else if (!searchText.length) {
            setLoading(true);

            // exaggerated inital load a bit
            getFromURLAndSleep('https://restcountries.com/v3.1/all', 1)
                .then((countryArray: SimpleCountry[]) => {
                    setBadResponse(false);
                    setCountries(countryArray)
                })
                .catch(err => {
                    console.error(JSON.stringify(err));
                    setBadResponse(true);
                    setCountries([]);
                })
                .then(_ => setLoading(false));
        }
    }

    useEffect(() => {
        refreshCountries();
    }, [searchText]);

    let mainElement: JSX.Element;
    if (loading) {
        mainElement =
            <>
                <Text style={styles.content}>Loading...</Text>
                <Text style={styles.smolContent}>(Exaggerated by sleeping in promise)</Text>
            </>
    } else if (badResponse) {
        mainElement =
            <>
                <Text style={styles.errContent}>Bad API Response</Text>
                <Text style={styles.smolErrContent}>(Try searching for something else?)</Text>
            </>
    } else {
        mainElement =
            <>
                <Text style={styles.content}>Countries Fetched: {countries.length}</Text>
                <FlatList
                    data={countries}
                    renderItem={
                        ({ item: country }: { item: SimpleCountry }) =>
                            <TouchableOpacity onPress={() => navigation.navigate('CountryDetailsScreen', country)}>
                                <Text>{country.name.common}</Text>
                            </TouchableOpacity>
                    }
                    keyExtractor={country => country.name.common}
                    onRefresh={refreshCountries}
                    refreshing={loading}
                />
            </>
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setSearchText}
                value={searchText}
                placeholder="Search"
                autoFocus={true}
                autoComplete={"postal-address-country"}
                returnKeyType={"search"}
            />

            {
                mainElement
            }
        </View>
    );
}

export default CountriesScreen;