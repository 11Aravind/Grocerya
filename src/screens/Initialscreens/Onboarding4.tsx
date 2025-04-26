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
import {useNavigateToScreen} from '../../hooks/useNavigateToScreen';

export default function Onboarding4() {
  const [activeButton, setActiveButton] = useState('next');
  // login
  const navigateToScreen = useNavigateToScreen();

  const handleButtonPress = (type: string): void => {
    // Navigate to 'ScreenTwo' (Onboarding2)
    setActiveButton(type);
    if (type === 'next') navigateToScreen('login');
  };
  return (
    <View style={onboardStyles.container}>
      <OnboardingLayout
        headdind="Best price guaranteed"
        paragraph="Allowing you to stock up on your favorite items while staying within your budget."
        imagePath="cash_register"
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
