import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../components/Buttons/CustomButton';
import OnboardHeadding from '../components/OnboardHeadding';
import {useNavigateToScreen} from '../hooks/useNavigateToScreen';

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
  return (
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
              ref={ref => {
                otpRef.current[index] = ref;
              }}
              style={{
                borderWidth: 0,
                height: 71,
                width: 70,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#F2F2F3',
                textAlign: 'center',
                fontSize: 20,
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
      <CustomButton buttonLabel="Continue" onPress={verifyOtp} />
    </View>
  );
}
const LoginStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
});
