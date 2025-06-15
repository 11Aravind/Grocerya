import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../components/Buttons/CustomButton';
import OnboardHeadding from '../components/OnboardHeadding';
import {useNavigateToScreen} from '../hooks/useNavigateToScreen';
import Toast from 'react-native-toast-message';
import {responsive} from '../utils/responsive';

export default function OtpScreen() {
  const dummyArray = new Array(5).fill(0);
  const otpRef = useRef<(TextInput | null)[]>([]);
  const [otp, setOtp] = useState(Array(dummyArray.length).fill(''));

  const handleChangeText = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < dummyArray.length - 1) {
      otpRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    {nativeEvent}: {nativeEvent: {key: string}},
    index: number,
  ) => {
    if (nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpRef.current[index - 1]?.focus();
    }
  };
  const navigateToScreen = useNavigateToScreen();
  const verifyOtp = () => {
    navigateToScreen('selectCategory');
  };
  useEffect(() => {
    const otp = Math.floor(10000 + Math.random() * 900000).toString();
    Toast.show({
      type: 'success',
      text1: 'Your OTP Code',
      text2: otp,
      position: 'top',
      visibilityTime: 10000, // 3 seconds
    });
  }, []);
  return (
    <>
      <Toast />
      <View style={LoginStyles.container}>
        <View style={{flex: 1}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              // padding: 20,
              marginTop: 25,
            }}>
            <Text
              style={{
                fontSize: 15,
                backgroundColor: '#F2F2F3',
                borderRadius: 50,
                width: 35,
                height: 35,
                padding: 5,
                color: 'black',
                textAlign: 'center',
                // fontWeight: 'bold',
              }}>
              ?
            </Text>
          </View>

          <OnboardHeadding
            title="Enter your OTP number"
            subTitle="We’ve sent the OTP number via sms to"
            descTitle="+62 888 1234 5678"
          />
          <View style={{flexDirection: 'row', gap: 4, marginTop: 15}}>
            {dummyArray.map((_, index) => (
              <TextInput
                key={index}
                ref={ref => {
                  otpRef.current[index] = ref;
                }}
                style={{
                  borderWidth: 0,
                  height: responsive.height(71),
                  width: responsive.width(70),
                  padding: responsive.padding(10),
                  borderRadius: responsive.radius(8),
                  backgroundColor: '#F2F2F3',
                  textAlign: 'center',
                  fontSize: responsive.font(20),
                  fontWeight: 'bold',
                  color: 'black',
                }}
                maxLength={1}
                placeholderTextColor={'black'}
                keyboardType="phone-pad"
                onChangeText={text => handleChangeText(text, index)}
                onKeyPress={e => handleKeyPress(e, index)}
              />
            ))}
          </View>
        </View>
        <CustomButton
          buttonLabel="Continue"
          onPress={verifyOtp}
          disabled={otp.filter(x => x !== '').length !== 5}
        />
      </View>
    </>
  );
}
const LoginStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
});
