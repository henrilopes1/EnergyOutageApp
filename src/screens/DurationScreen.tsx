// src/screens/DurationScreen.tsx
import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Container } from '../components/Container'
import { Title } from '../components/Title'
import Button from '../components/Button'
import { RootStackParamList } from '../types/navigation'
import { OutageEvent } from '../types/outage'
import { Spacer } from '../components/Spacer'

type Props = NativeStackScreenProps<RootStackParamList, 'Duration'>

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`

const InputGroup = styled.View`
  flex: 1;
  margin-horizontal: ${({ theme }) => theme.spacing.xs}px;
`

const Label = styled.Text`
  font-size: ${({ theme }) => theme.typography.body.size}px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs}px;
`

const Input = styled.TextInput`
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.radii.md}px;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.body.size}px;
  text-align: center;
`

const Summary = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.body.size}px;
  text-align: center;
  margin-vertical: ${({ theme }) => theme.spacing.md}px;
`

export default function DurationScreen({ navigation, route }: Props) {
  const { event } = route.params as { event: OutageEvent }
  const [days, setDays] = useState<string>('')
  const [hours, setHours] = useState<string>('')
  const [minutes, setMinutes] = useState<string>('')

  const totalMinutes = 
    (Number(days) > 0 ? Number(days) * 24 * 60 : 0) +
    (Number(hours) > 0 ? Number(hours) * 60 : 0) + 
    (Number(minutes) > 0 ? Number(minutes) : 0)

  const isDisabled = totalMinutes <= 0 || 
    Number(minutes) >= 60 || 
    Number(hours) >= 24

  function formatDuration(minutes: number): string {
    const d = Math.floor(minutes / (24 * 60))
    const h = Math.floor((minutes % (24 * 60)) / 60)
    const m = minutes % 60

    const parts = []
    if (d > 0) parts.push(`${d} ${d === 1 ? 'dia' : 'dias'}`)
    if (h > 0) parts.push(`${h} ${h === 1 ? 'hora' : 'horas'}`)
    if (m > 0) parts.push(`${m} ${m === 1 ? 'minuto' : 'minutos'}`)

    return parts.join(' e ') || '0 minutos'
  }

  const goNext = () => {
    navigation.navigate('Impact', {
      event: { ...event, duration: totalMinutes },
    })
  }

  return (
    <Container>
      <Title>Duração do evento</Title>
      <Spacer size={24} />
      
      <InputContainer>
        <InputGroup>
          <Label>Dias</Label>
          <Input 
            placeholder="0"
            keyboardType="numeric"
            value={days}
            onChangeText={setDays}
            maxLength={2}
          />
        </InputGroup>

        <InputGroup>
          <Label>Horas</Label>
          <Input 
            placeholder="0"
            keyboardType="numeric"
            value={hours}
            onChangeText={setHours}
            maxLength={2}
          />
        </InputGroup>

        <InputGroup>
          <Label>Minutos</Label>
          <Input 
            placeholder="0"
            keyboardType="numeric"
            value={minutes}
            onChangeText={setMinutes}
            maxLength={2}
          />
        </InputGroup>
      </InputContainer>

      <Summary>{formatDuration(totalMinutes)}</Summary>

      <Button 
        title="Próximo" 
        onPress={goNext} 
        disabled={isDisabled} 
      />
    </Container>
  )
}
