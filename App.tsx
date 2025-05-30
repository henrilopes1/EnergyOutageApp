// App.tsx
import 'react-native-gesture-handler';          
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { darkTheme } from './src/styles/theme';
import Navigator from './src/navigation';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navigator />
    </ThemeProvider>
  );
}
