import React from 'react';
import { nav } from '../styles';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import back from '../assets/back.png';

const HeaderText: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={nav.iconBackContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={nav.iconBack} source={back} />
        </TouchableOpacity>
        <Text style={nav.textTitle}>MovieFlix</Text>
      </View>
    </>
  );
};
export default HeaderText;
