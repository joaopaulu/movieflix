import React from 'react';
import { colors, nav } from '../styles';
import { Text, View, Image } from 'react-native';
import back from '../assets/back.png';

const HeaderText: React.FC = () => {
  return (
    <>
      <View style={nav.iconBackContainer}>
        <Image style={nav.iconBack} source={back} />
        <HeaderText />
      </View>
    </>
  );
};
export default HeaderText;
