import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../components/Buttons/CustomButton';
import OnboardHeadding from '../components/OnboardHeadding';
import { useNavigateToScreen } from '../hooks/useNavigateToScreen';

export default function Category() {
  const categoryList = [
    {id: 1, name: 'Gluten-Free'},
    {id: 2, name: 'Vegan Friendly'},
    {id: 3, name: 'Raw Meat'},
    {id: 4, name: 'Organic'},
    {id: 5, name: 'Dairy-Free'},
    {id: 6, name: 'Sugar-Free'},
    {id: 7, name: 'Cruelty-Free'},
    {id: 8, name: 'Processed Food'},
    {id: 8, name: 'Show +22 More'},
  ];
   const navigateToScreen = useNavigateToScreen();
    const isCategorySelected = () => {
      navigateToScreen('setLocation');
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
            }}>
            ?
          </Text>
        </View>
        <OnboardHeadding
          title="All your grocery need in one place"
          subTitle="Select your desired shop category"
        />
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 10,
            marginTop: 20,
          }}>
          {categoryList.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  backgroundColor: '#F2F2F3',
                  borderRadius: 100,
                  padding: 10,
                  marginTop: 10,
                  display: 'flex',
                }}>
                <Text
                  style={{
                    color: 'black',
                    paddingHorizontal: 10,
                    fontSize: 14,
                    fontFamily: 'poppins-medium',
                  }}>
                  {item.name}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <CustomButton buttonLabel="Continue" onPress={isCategorySelected} />
    </View>
  );
}
const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headdingContainer: {
    gap: 8,
    marginTop: 30,
  },
  loginHeadding: {
    fontSize: 20,
    color: 'black',
  },
});
