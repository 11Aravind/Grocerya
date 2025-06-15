import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { responsive } from '../utils/responsive';

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
    gap: responsive.height(8),
    marginTop: responsive.margin(30),
  },
  loginHeadding: {
    fontFamily: 'poppins-semiBold',
    fontSize: responsive.font(20),
    color: 'black',
  },
  subTitle: {
    color: '#777777',
    fontSize: responsive.font(16),
    fontFamily: 'poppins-regular',
  },
  onBoardDescStyle: {
    lineHeight: responsive.height(25),
    fontFamily: 'poppins-semiBold',
  },
});
