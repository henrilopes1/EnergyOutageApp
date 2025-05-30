// src/navigation/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';
import OverviewScreen from '../screens/OverviewScreen';
import LocationScreen from '../screens/LocationScreen';
import DurationScreen from '../screens/DurationScreen';
import ImpactScreen from '../screens/ImpactScreen';
import RecommendationsScreen from '../screens/RecommendationsScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTitleStyle: {
            color: '#FFFFFF', // Mudando para branco
            fontSize: theme.typography.h2.size,
            fontWeight: '600',
            textAlign: 'center',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF', // Seta de voltar também em branco
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Stack.Screen 
          name="Overview" 
          component={OverviewScreen}
          options={{
            title: 'Registros de Apagões',
          }}
        />
        <Stack.Screen 
          name="Location" 
          component={LocationScreen}
          options={{ title: 'Localização' }}
        />
        <Stack.Screen 
          name="Duration" 
          component={DurationScreen}
          options={{ title: 'Duração' }}
        />
        <Stack.Screen 
          name="Impact" 
          component={ImpactScreen}
          options={{ title: 'Impacto' }}
        />
        <Stack.Screen 
          name="Recommendations" 
          component={RecommendationsScreen}
          options={{ title: 'Recomendações' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
