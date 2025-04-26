import {Image, StyleSheet, View} from 'react-native';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  OnboardNavigation: undefined;
};

export default function SplashScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'OnboardNavigation'}],
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={splashScreenStyle.container}>
      <Image source={require('./../../../assets/Images/splashLogo.png')} />
    </View>
  );
}

const splashScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
