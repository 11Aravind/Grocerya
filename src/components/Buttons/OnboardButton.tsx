import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
interface OnboardButtonProps {
  activeButton: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
}
export default function OnboardButton({
  activeButton,
  setActiveButton,
}: OnboardButtonProps) {
  return (
    <View style={onboardButtonStyles.buttonContainer}>
      <TouchableHighlight
        style={[
          onboardButtonStyles.buttonStyle,
          activeButton === 'skip' && onboardButtonStyles.activeButton,
        ]}
        onPress={() => setActiveButton('skip')}>
        <Text
          style={[
            onboardButtonStyles.buttonTextColor,
            activeButton === 'skip' &&
              onboardButtonStyles.activeButtonTextColor,
          ]}>
          Skip
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[
          onboardButtonStyles.buttonStyle,
          activeButton === 'next' && onboardButtonStyles.activeButton,
        ]}
        onPress={() => setActiveButton('next')}>
        <Text
          style={[
            onboardButtonStyles.buttonTextColor,
            activeButton === 'next' &&
              onboardButtonStyles.activeButtonTextColor,
          ]}>
          Next
        </Text>
      </TouchableHighlight>
    </View>
  );
}
const onboardButtonStyles = {
  buttonContainer: {
    display: 'flex' as const,
    flexDirection: 'row' as const,
    gap: 20,
    justifyContent: "space-between" as const,
    // alignItems: 'center' as const,
    // alignItems: 'center',
    width: '100%' as const,
    paddingHorizontal: 20,
    // backgroundColor: 'red',
    paddingBottom: 30,
  },
  buttonStyle: {
    borderRadius: 100,
    backgroundColor: '#F2F2F3',
    width: 150,
    padding: 15,
  },
  buttonTextColor: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },

  activeButton: {
    backgroundColor: 'black',
  },
  activeButtonTextColor: {
    color: 'white', // when button is active
  },
};
