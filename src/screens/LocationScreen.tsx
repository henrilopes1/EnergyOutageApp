// src/screens/LocationScreen.tsx
import React, { useState } from 'react';
import { KeyboardTypeOptions } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Container } from '../components/Container';
import { Title } from '../components/Title';
import { Spacer } from '../components/Spacer';
import Button from '../components/Button';
import { RootStackParamList } from '../types/navigation';
import { OutageEvent } from '../types/outage';

type LocationNavProp = NativeStackNavigationProp<RootStackParamList, 'Location'>;

const StyledText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body.size}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.typography.body.size}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
  font-weight: 600;
`;

const InputContainer = styled.View`
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`;

const Input = styled.TextInput.attrs<{ keyboardType?: KeyboardTypeOptions }>(p => ({
  placeholderTextColor: p.theme.colors.border,
}))<{ keyboardType?: KeyboardTypeOptions }>`
  border: 1px solid ${p => p.theme.colors.border};
  padding: ${p => p.theme.spacing.sm}px;
  border-radius: ${p => p.theme.radii.sm}px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.surface};
`;

export default function LocationScreen({ navigation }: { navigation: LocationNavProp }) {
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [cep, setCep] = useState('');

  const goNext = () => {
    const location = `${city}, ${neighborhood} – CEP ${cep}`;
    const event: OutageEvent = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      location,
      duration: 0,
      impact: '',
    };
    navigation.navigate('Duration', { event });
  };

  const isDisabled = !city.trim() || !neighborhood.trim() || !cep.trim();

  return (
    <Container>
      <Title>Selecione a localização do evento</Title>
      <Spacer size={24} />
      
      <InputContainer>
        <InputLabel>Cidade</InputLabel>
        <Input
          placeholder="Ex: São Paulo"
          value={city}
          onChangeText={setCity}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel>Bairro</InputLabel>
        <Input
          placeholder="Ex: Vila Mariana"
          value={neighborhood}
          onChangeText={setNeighborhood}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel>CEP</InputLabel>
        <Input
          placeholder="Ex: 00000-000"
          value={cep}
          onChangeText={text => setCep(text.replace(/[^0-9]/g, ''))}
          keyboardType="numeric"
          maxLength={8}
        />
      </InputContainer>

      <Button
        title="Próximo"
        onPress={goNext}
        disabled={isDisabled}
      />
    </Container>
  );
}
