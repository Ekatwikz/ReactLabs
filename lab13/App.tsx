import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CountriesScreen from './CountriesScreen'
import CountryDetailsScreen from './CountryDetailsScreen'
import { type StackType } from './types'

const Stack = createNativeStackNavigator<StackType>();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CountriesScreen" component={CountriesScreen} options={{ title: 'Countries' }} />
        <Stack.Screen name="CountryDetailsScreen" component={CountryDetailsScreen} options={{ title: 'Country Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;