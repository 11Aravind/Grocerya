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

export default function Onboarding3() {
  const [activeButton, setActiveButton] = useState('next');
  const navigateToScreen = useNavigateToScreen();
  const handleButtonPress = (type: string): void => {
    // Navigate to 'ScreenTwo' (Onboarding2)
    setActiveButton(type);
    if (type === 'next') navigateToScreen('ScreenFour');
  };
  return (
    <View style={onboardStyles.container}>
      <OnboardingLayout
        headdind="Protected package delivery."
        paragraph="Your groceries are carefully packaged to ensure they arrive safely and in perfect condition."
        imagePath="big_box"
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
