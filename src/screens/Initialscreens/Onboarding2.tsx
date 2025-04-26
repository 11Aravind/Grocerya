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
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/navigation';
import {useNavigateToScreen} from '../../hooks/useNavigateToScreen';

export default function Onboarding2() {
  const [activeButton, setActiveButton] = useState('next');
  const navigateToScreen = useNavigateToScreen();

  const handleButtonPress = (type: string): void => {
    // Navigate to 'ScreenTwo' (Onboarding2)
    setActiveButton(type);
    if (type === 'next') navigateToScreen('ScreenThree');
  };
  return (
    <View style={onboardStyles.container}>
      <OnboardingLayout
        headdind="Get any packages delivered"
        paragraph="Get all your items conveniently, ensuring everything you need arrive without any hassle."
        imagePath="delivery_truck"
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
