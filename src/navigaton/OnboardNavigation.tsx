import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding1 from '../screens/Initialscreens/Onboarding1';
import Onboarding2 from '../screens/Initialscreens/Onboarding2';
import Onboarding3 from '../screens/Initialscreens/Onboarding3';
import Onboarding4 from '../screens/Initialscreens/Onboarding4';

// Create your screen components for each tab
function ScreenOne() {
  return (
    <View style={styles.screenContainer}>
      <Text>Screen 1 Content</Text>
    </View>
  );
}

function ScreenTwo() {
  return (
    <View style={styles.screenContainer}>
      <Text>Screen 2 Content</Text>
    </View>
  );
}

function ScreenThree() {
  return (
    <View style={styles.screenContainer}>
      <Text>Screen 3 Content</Text>
    </View>
  );
}

// Initialize the Tab Navigator
const Tab = createMaterialTopTabNavigator();
function CustomTabBar({state, position, navigation}: MaterialTopTabBarProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        paddingTop: 10,
      }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <View
            key={route.key}
            style={{
              marginTop: 35,
              height: 3,
              width: 85,
              margin: 5,
              backgroundColor: isFocused ? 'black' : 'lightgray',
              borderRadius: 10,
            }}
          />
        );
      })}
    </View>
  );
}
function OnboardNavigation() {
  // <Tab.Navigator
  //   initialRouteName="ScreenOne"
  //   screenOptions={{
  //     tabBarStyle: {backgroundColor: 'white'},
  //     tabBarIndicatorStyle: {
  //       backgroundColor: 'black', // Set the active tab indicator color
  //       padding: 2,
  //       height: 3,
  //     },
  //     tabBarItemStyle: {
  //       marginHorizontal: 8, // Add horizontal space between each tab (adjust the value for desired gap)
  //     },
  //     tabBarLabel: () => null, // Hide tab names
  //   }}>
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen name="ScreenOne" component={Onboarding1} />
      <Tab.Screen name="ScreenTwo" component={Onboarding2} />
      <Tab.Screen name="ScreenThree" component={Onboarding3} />
      <Tab.Screen name="ScreenFour" component={Onboarding4} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnboardNavigation;
