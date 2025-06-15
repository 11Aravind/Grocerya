import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity} from 'react-native';
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
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Bag') {
            iconName = 'shopping-bag';
          } else if (route.name === 'Favorite') {
            iconName = 'bookmark';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: focused ? '#EEEEEE' : 'transparent',
                paddingHorizontal: focused ? 14 : 0,
                paddingVertical: focused ? 6 : 0,
                borderRadius: 10,
                minWidth: focused ? 100 : 0,
                minHeight: focused ? 40 : 0,
                marginBottom: 8, // Adding margin to create space between the tab and icon
              }}>
              <Icon
                name={iconName}
                size={20}
                color={focused ? 'black' : 'gray'}
              />
              {focused && (
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    marginLeft: 8,
                    fontWeight: '500',
                    fontFamily: 'poppins-medium',
                    includeFontPadding: false, // 👈 remove extra font padding (optional, nice)
                    textAlignVertical: 'center',
                  }}
                  numberOfLines={1}
                  ellipsizeMode="clip">
                  {route.name}
                </Text>
              )}
            </View>
          );
        },
        tabBarStyle: {
          height: 84, // Keeps the tab height at 84
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 0,
          paddingHorizontal: 30,
          // paddingBottom: 10, // You can adjust this padding as necessary
          // marginBottom: 10, // This adds the space between the tab and the screen
          paddingTop: 20, // This adds the space between the tab and the screen
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bag" component={BagScreen} />
      <Tab.Screen name="Favorite" component={BookmarkScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}





