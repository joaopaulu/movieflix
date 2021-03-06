import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { text, theme } from '../styles';

import eyesOpened from '../assets/eye-open.png';
import eyesClosed from '../assets/eye-close.png';
import seta from '../assets/seta.png';
import { useNavigation } from '@react-navigation/native';
import { login } from '../services/auth';

const Login: React.FC = () => {
  const navigate = useNavigation();
  const [hidePassord, setHidePassord] = useState(true);
  const [, setUserFetchData] = useState({});
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
  async function handleLogin() {
    const data = await login(userInfo);
    setUserFetchData(data);
    navigate.navigate('CatalogMovie');
  }

  return (
    <View style={theme.container}>
      <View style={theme.card}>
        <Text style={text.titleLogin}>LOGIN</Text>
        <View style={theme.contenInput}>
          <View style={theme.passwordGroup}>
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              style={theme.textInput}
              value={userInfo.username}
              onChangeText={e => {
                const newUserInfo = { ...userInfo };
                newUserInfo.username = e;
                setUserInfo(newUserInfo);
              }}
            />
          </View>
          <View style={theme.passwordGroup}>
            <TextInput
              placeholder="Senha"
              autoCapitalize="none"
              style={theme.textInput}
              value={userInfo.password}
              secureTextEntry={!hidePassord}
              onChangeText={e => {
                const newUserInfo = { ...userInfo };
                newUserInfo.password = e;
                setUserInfo(newUserInfo);
              }}
            />
            <TouchableOpacity
              style={theme.toogle}
              onPress={() => setHidePassord(!hidePassord)}
            >
              <Image
                source={hidePassord ? eyesOpened : eyesClosed}
                style={theme.eyes}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={theme.loginButton}
            activeOpacity={0.8}
            onPress={() => handleLogin()}
          >
            <Text style={text.titleButtonLogin}>Fazer Login</Text>
            <View style={theme.setaLogin}>
              <Image source={seta} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
