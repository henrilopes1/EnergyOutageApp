// src/screens/ImpactScreen.tsx
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Button from '../components/Button';
import { RootStackParamList } from '../types/navigation';
import { OutageEvent } from '../types/outage';
import { Spacer } from '../components/Spacer';

type Props = NativeStackScreenProps<RootStackParamList, 'Impact'>;

const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.h2.size}px;
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  height: 100px;
  text-align-vertical: top;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.surface};
`;

export default function ImpactScreen({ navigation, route }: Props) {
  const { event } = route.params;
  const [impact, setImpact] = useState('');

  return (
    <Container>
      <Title>Prejuízos observados</Title>
      <Spacer size={24} />
      <Input
        placeholder="Descreva os prejuízos"
        multiline
        value={impact}
        onChangeText={setImpact}
      />
      <Button title="Próximo" onPress={() => navigation.navigate('Recommendations', { event: { ...event, impact } })} disabled={!impact.trim()} />
    </Container>
  );
}
