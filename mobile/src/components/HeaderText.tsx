import React, { useState, useEffect } from 'react';
import { nav } from '../styles';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { isAuthenticator } from '../services/auth';
import back from '../assets/back.png';

const HeaderText: React.FC = () => {
  const navigation = useNavigation();
  const [authenticated, setAuthenticated] = useState(false);

  async function logged() {
    const result = await isAuthenticator();

    result ? setAuthenticated(true) : setAuthenticated(false);
  }

  useEffect(() => {
    logged();
  }, []);

  return (
    <>
      <View style={nav.iconBackContainer}>
        {authenticated ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={nav.iconBack} source={back} />
          </TouchableOpacity>
        ) : null}
        <Text style={nav.textTitle}>MovieFlix</Text>
      </View>
    </>
  );
};
export default HeaderText;
