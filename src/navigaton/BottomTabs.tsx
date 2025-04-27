import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // You can use Feather, MaterialIcons etc.

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function BagScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bag Screen</Text>
    </View>
  );
}

function BookmarkScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Bookmark Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Bag') {
            iconName = 'shopping-bag';
          } else if (route.name === 'Bookmark') {
            iconName = 'bookmark';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return (
            <Icon
              name={iconName}
              size={24}
              color={focused ? 'black' : 'gray'}
            />
          );
        },
        tabBarLabel: ({focused}) =>
          focused ? (
            <Text style={{fontSize: 12, color: 'black', marginTop: 4}}>
              {route.name}
            </Text>
          ) : null, // Only show label if focused
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
          position: 'absolute',
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bag" component={BagScreen} />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
