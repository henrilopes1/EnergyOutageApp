import React from 'react';
import { ViewStyle } from 'react-native';
import { MotiView } from 'moti';

export default function AnimatedScreen({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return (
    <MotiView
      from={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 300 }}
      style={style}
    >
      {children}
    </MotiView>
  );
}
