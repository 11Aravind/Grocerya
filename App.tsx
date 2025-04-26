import SplashScreen from './src/screens/Initialscreens/SplashScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import OnboardNavigation from './src/navigaton/OnboardNavigation';
import Login from './src/screens/Login';
import OtpScreen from './src/screens/OtpScreen';
import Category from './src/screens/Category';
import Location from './src/screens/Location';
import EnableNotification from './src/screens/EnableNotification';
import HomeScreen from './src/screens/HomeScreen';
import BottomTabs from './src/navigaton/BottomTabs';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardNavigation" component={OnboardNavigation} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="otpScreen" component={OtpScreen} />
        <Stack.Screen name="selectCategory" component={Category} />
        <Stack.Screen name="setLocation" component={Location} />
        <Stack.Screen
          name="enableNotification"
          component={EnableNotification}
        />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
