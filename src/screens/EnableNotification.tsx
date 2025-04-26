import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import OnboardHeadding from '../components/OnboardHeadding';
import CustomButton from '../components/Buttons/CustomButton';

export default function EnableNotification() {
  return (
    <View style={notificationStyle.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
        }}>
        <OnboardHeadding
          title="Lastly, please enable notification"
          subTitle="Enable your notifications for more update and important messages about your grocery needs"
        />
        <View>
          <Image source={require('../../assets/Images/notification.png')} />
        </View>
      </View>
      <CustomButton buttonLabel="Enable Notifications" onPress={() => {}} />
      <CustomButton
        buttonLabel="Skip For Now"
        onPress={() => {}}
        backgroundColor="#F2F2F3"
        textColor="black"
      />
    </View>
  );
}
const notificationStyle = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
});
