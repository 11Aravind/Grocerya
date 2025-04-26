import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import OnboardingLayout from '../components/OnboardingLayout';
import OnboardButton from '../components/Buttons/OnboardButton';
import CustomButton from '../components/Buttons/CustomButton';
import {useNavigateToScreen} from '../hooks/useNavigateToScreen';

export default function Location() {
  const navigateToScreen = useNavigateToScreen();
  const isLocationOn = () => {
    navigateToScreen('enableNotification');
  };
  return (
    <View style={onboardStyles.container}>
      <OnboardingLayout
        headdind="Set your location"
        paragraph="This let us know your location for best shipping experience"
        imagePath="location"
      />
      <CustomButton buttonLabel="Allow Google Maps" onPress={isLocationOn} />
      <CustomButton
        buttonLabel="Set Manually"
        onPress={() => {}}
        backgroundColor="#F2F2F3"
        textColor="black"
      />
    </View>
  );
}
const onboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
