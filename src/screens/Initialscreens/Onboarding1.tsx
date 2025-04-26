import React, {useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import OnboardButton from '../../components/Buttons/OnboardButton';
import OnboardingLayout from '../../components/OnboardingLayout';
import { useNavigateToScreen } from '../../hooks/useNavigateToScreen';

export default function Onboarding1() {
  const [activeButton, setActiveButton] = useState('next');
  const navigateToScreen = useNavigateToScreen();

  const handleButtonPress = (type: string): void => {
    // Navigate to 'ScreenTwo' (Onboarding2)
    setActiveButton(type);
    if (type === 'next') navigateToScreen('ScreenTwo');
  };

  return (
    <View style={onboardStyles.container}>
      <OnboardingLayout
        headdind="Welcome to Grocerya"
        paragraph="Get your grocery needs at your service within a minute. fast, efficient, and convenient."
        imagePath="trolley"
      />
      <OnboardButton
        activeButton={activeButton}
        setActiveButton={value => {
          if (typeof value === 'string') {
            handleButtonPress(value);
          }
        }}
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
