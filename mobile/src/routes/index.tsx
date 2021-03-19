import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, BtnNavbar } from '../pages';
import { colors, nav } from '../styles';
import { Text, View } from 'react-native';

const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.textTitle}>MovieFlix</Text>;

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.orange,
        },
        headerLeft: () => <HeaderText />,
        headerRight: () => <BtnNavbar />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default Routes;
