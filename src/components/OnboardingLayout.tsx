import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {onBoardImages} from '../constants/Constants';
interface OnboardingLayoutProps {
  headdind: string;
  paragraph: string;
  imagePath: string;
}
export default function OnboardingLayout({
  headdind,
  paragraph,
  imagePath,
}: OnboardingLayoutProps) {
  return (
    <View style={onboardStyles.CenterContainer}>
      <View>
        <Image source={onBoardImages[imagePath]} />
      </View>

      <View style={onboardStyles.textContainer}>
        <Text style={onboardStyles.onboardHeadding}>{headdind}</Text>
        <Text style={onboardStyles.onboardParagraph}>{paragraph}</Text>
      </View>
    </View>
  );
}
const onboardStyles = StyleSheet.create({
  CenterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 28,
  },

  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardHeadding: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    // fontWeight: '500',
    color: '#000',
    marginBottom: 10,
  },
  onboardParagraph: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 24,
  },
});
