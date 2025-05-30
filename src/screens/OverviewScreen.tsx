// src/screens/OverviewScreen.tsx
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { MotiView } from 'moti';
import styled from 'styled-components/native';
import { Container } from '../components/Container';
import { Title, Subtitle } from '../components/Title';
import Card from '../components/Card';
import Button from '../components/Button';
import { getEvents } from '../services/storage';
import { OutageEvent } from '../types/outage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Overview'>;
};

const EventText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.h2.size}px;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

const DurationText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.body.size}px;
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`;

const DateText = styled.Text`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.typography.body.size}px;
`;

// Função auxiliar para formatar a duração
function formatDuration(minutes: number): string {
  const days = Math.floor(minutes / 1440);
  const hours = Math.floor((minutes % 1440) / 60);
  const remainingMinutes = minutes % 60;

  const parts = [];

  if (days > 0) {
    parts.push(`${days} ${days === 1 ? 'dia' : 'dias'}`);
  }
  if (hours > 0) {
    parts.push(`${hours} ${hours === 1 ? 'hora' : 'horas'}`);
  }
  if (remainingMinutes > 0 || parts.length === 0) {
    parts.push(`${remainingMinutes} ${remainingMinutes === 1 ? 'minuto' : 'minutos'}`);
  }

  return parts.join(' e ');
}

export default function OverviewScreen({ navigation }: Props) {
  const [events, setEvents] = useState<OutageEvent[]>([]);

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => getEvents().then(setEvents));
    return unsub;
  }, [navigation]);

  return (
    <Container>
      <FlatList
        data={events}
        keyExtractor={i => i.id}
        renderItem={({ item, index }) => (
          <MotiView
            from={{ opacity: 0, translateY: 20, scale: 0.95 }}
            animate={{ opacity: 1, translateY: 0, scale: 1 }}
            transition={{ 
              type: 'timing',
              duration: 350,
              delay: index * 100 
            }}
          >
            <Card>
              <EventText>{item.location}</EventText>
              <DurationText>{formatDuration(item.duration)}</DurationText>
              <DateText>{new Date(item.date).toLocaleDateString('pt-BR')}</DateText>
            </Card>
          </MotiView>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
      <Button
        title="Registrar novo episódio"
        onPress={() => navigation.navigate('Location')}
      />
    </Container>
  );
}
