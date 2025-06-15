import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { responsive } from '../../utils/responsive';

interface CustomButtonProps {
  buttonLabel: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
}

export default function CustomButton({
  buttonLabel,
  onPress,
  backgroundColor = 'black',
  textColor = '#ffffff',
  disabled = false,
  buttonStyle,
  textStyle,
  loading = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        {backgroundColor: backgroundColor, opacity: disabled ? 0.5 : 1},
        buttonStyle,
      ]}>
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.buttonText, {color: textColor}, textStyle]}>
          {buttonLabel}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: responsive.height(52),
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsive.margin(20),
    borderRadius: responsive.radius(100),
  },
  buttonText: {
    fontSize: responsive.font(16),
    fontFamily: 'Poppins-medium',
    paddingHorizontal: responsive.padding(20),
  },
});
