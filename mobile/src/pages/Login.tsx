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
  const n = useNavigation();
  const [hidePassowrd, setHidePassword] = useState(true);
  const [userFetchData, setUserFetchData] = useState({});
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
  });
  async function handleLogin() {
    const data = await login(userInfo);
    setUserFetchData(data);
    n.navigate('CatalogMovie');
  }

  return (
    <View style={theme.container}>
      <View style={theme.card}>
        <Text style={text.titleLogin}>LOGIN</Text>
        <View style={theme.contenInput}>
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
          <View style={theme.inputPassowrd}>
            <TextInput
              placeholder="Senha"
              autoCapitalize="none"
              style={theme.textInput}
              value={userInfo.password}
              secureTextEntry={hidePassowrd}
              onChangeText={e => {
                const newUserInfo = { ...userInfo };
                newUserInfo.password = e;
                setUserInfo(newUserInfo);
              }}
            />
            <TouchableOpacity
              onPress={() => setHidePassword(!hidePassowrd)}
              style={theme.toogle}
            >
              <Image
                source={hidePassowrd ? eyesOpened : eyesClosed}
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
