import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../components/Buttons/CustomButton';
import OnboardHeadding from '../components/OnboardHeadding';
import {useNavigateToScreen} from '../hooks/useNavigateToScreen';

export default function Login() {
  const navigateToScreen = useNavigateToScreen();
  const handleLogin = () => {
    navigateToScreen('otpScreen');
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
          title="Get started"
          subTitle="You can log in or make an account if you’re new"
        />
        <View style={{gap: 10, marginTop: 15}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: 'poppins-medium',
            }}>
            Enter your phone number
          </Text>
          <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
            <TextInput
              style={{
                borderWidth: 0,
                height: 52,
                maxWidth: 80,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#F2F2F3',
              }}
              editable={false}
              placeholder="🇮🇳 +91"
              placeholderTextColor={'black'}
              //   keyboardType="phone-pad"
            />
            <TextInput
              style={{
                borderWidth: 0,
                height: 52,
                width: 294,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#F2F2F3',
              }}
              placeholder="Phone number"
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>
        </View>
      </View>
      <CustomButton buttonLabel="Continue" onPress={handleLogin} />
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
