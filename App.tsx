import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from './src/pages/Home';
import DetailsScreen from './src/pages/Detail';
import {Provider as MyProvider} from 'react-redux';
import { useStore } from './src/store/useStore';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  const store = useStore();
  return (
    <MyProvider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              {/* <Stack.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{title: 'Overview'}}
              /> */}
              <Stack.Screen name='Home'>
                {props => <HomeScreen {...props}/>}
              </Stack.Screen>
              <Stack.Screen name="Details">
                {props => <DetailsScreen {...props} />}
              </Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </MyProvider>
  );
}

export default App;