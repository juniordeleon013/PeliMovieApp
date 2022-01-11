import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { IMovie } from '../interfaces/MovieInterface';


export type TRootStackParams = {
  HomeScreen: undefined,
  DetailScreen: IMovie
}

const Stack = createStackNavigator<TRootStackParams>();

export const Navigation = () => {
  return (
      <Stack.Navigator
        screenOptions={{ 
            headerShown: false,
            cardStyle: {
                //backgroundColor: 'white',
            }
         }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}