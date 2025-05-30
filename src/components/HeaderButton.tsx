import React from 'react';
import styled from 'styled-components/native';

const TouchableArea = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.spacing.sm}px;
  margin: 0 ${({ theme }) => theme.spacing.xs}px;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.body.size}px;
  font-weight: 600;
`;

type Props = {
  title: string;
  onPress: () => void;
};

export default function HeaderButton({ title, onPress }: Props) {
  return (
    <TouchableArea onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </TouchableArea>
  );
}