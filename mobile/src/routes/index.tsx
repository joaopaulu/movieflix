import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, BtnNavbar, CatalogMovie, DetailsMovie } from '../pages';
import { colors } from '../styles';

import HeaderText from '../components/HeaderText';

const Stack = createStackNavigator();

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
      <Stack.Screen name="CatalogMovie" component={CatalogMovie} />
      <Stack.Screen name="DetailsMovie" component={DetailsMovie} />
    </Stack.Navigator>
  );
};

export default Routes;
