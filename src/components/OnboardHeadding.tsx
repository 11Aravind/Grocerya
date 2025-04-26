import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface OnboardHeaddingProps {
  title: string;
  subTitle: string;
  descTitle?: string;
}

export default function OnboardHeadding({
  subTitle,
  title,
  descTitle,
}: OnboardHeaddingProps) {
  return (
    <View style={onboardHeaddingStyle.headdingContainer}>
      <Text style={onboardHeaddingStyle.loginHeadding}>{title}</Text>
      <Text
        style={[
          onboardHeaddingStyle.subTitle,
          descTitle !== '' && onboardHeaddingStyle.onBoardDescStyle,
        ]}>
        {subTitle}
        {descTitle && (
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
            }}>
            {'\n'}
            {descTitle}
          </Text>
        )}
      </Text>
    </View>
  );
}
const onboardHeaddingStyle = StyleSheet.create({
  headdingContainer: {
    gap: 8,
    marginTop: 30,
  },
  loginHeadding: {
    fontFamily: 'poppins-semiBold',
    fontSize: 20,
    color: 'black',
  },
  subTitle: {
    color: '#777777',
    fontSize: 16,
    fontFamily: 'poppins-regular',
  },
  onBoardDescStyle: {
    lineHeight: 25,
    fontFamily: 'poppins-semiBold',
  },
});
