import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { theme, text } from '../styles';
import { useNavigation } from '@react-navigation/native';

import arrow from '../assets/image_home.png';
import seta from '../assets/seta.png';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={theme.container}>
      <View style={theme.card}>
        <Image style={theme.draw} source={arrow} />
        <View style={theme.contentText}>
          <Text style={text.title}>Avalie filmes</Text>
          <Text style={text.subTitle}>
            Diga o que você achou do seu filme favorito
          </Text>
        </View>
        <TouchableOpacity
          style={theme.homeButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={text.titleButtonHome}>FAZER LOGIN</Text>
          <View style={theme.setaContent}>
            <Image source={seta} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
