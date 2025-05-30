// src/screens/RecommendationsScreen.tsx
import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MotiView } from 'moti';
import Button from '../components/Button';
import { Container } from '../components/Container';
import { RootStackParamList } from '../types/navigation';
import { saveEvent } from '../services/storage';
import { OutageEvent } from '../types/outage';
import { Spacer } from '../components/Spacer';

type Props = NativeStackScreenProps<RootStackParamList, 'Recommendations'>;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.h2.size}px;
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.radii.lg}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ItemTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.body.size}px;
  font-weight: 600; 
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

const ItemDescription = styled.Text`
  font-size: ${({ theme }) => theme.typography.body.size}px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

const recommendations = [
  {
    title: 'Iluminação de Emergência',
    description: 'Tenha lanternas e pilhas extras em casa para garantir iluminação durante o apagão.'
  },
  {
    title: 'Proteção de Equipamentos',
    description: 'Desligue equipamentos sensíveis como computadores e eletrodomésticos durante a queda.'
  },
  {
    title: 'Água Potável',
    description: 'Mantenha água potável armazenada para consumo durante o período sem energia.'
  },
  {
    title: 'Kit de Emergência',
    description: 'Tenha um kit de primeiros socorros pronto e acessível em caso de necessidade.'
  },
];

export default function RecommendationsScreen({ navigation, route }: Props) {
  const { event } = route.params as { event: OutageEvent };

  const handleSave = async () => {
    await saveEvent(event);
    navigation.popToTop();
  };

  return (
    <Container>
      <Title>Recomendações</Title>
      <Spacer size={24} />
      <ScrollView 
        style={{ marginBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {recommendations.map((item, index) => (
          <MotiView
            key={index}
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ 
              type: 'timing',
              duration: 500,
              delay: index * 100
            }}
          >
            <Card>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </Card>
          </MotiView>
        ))}
      </ScrollView>
      <Button 
        title="Finalizar Registro" 
        onPress={handleSave} 
      />
    </Container>
  );
}
