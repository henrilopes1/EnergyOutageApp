import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { useTheme } from "styled-components/native";

interface Props extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
}

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.radii.pill}px;
  align-items: center;
  justify-content: center;
  elevation: 5;
  shadow-color: ${({ theme }) => theme.colors.primary};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.5;
  shadow-radius: 8px;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.body.size}px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export default function Button({ title, onPress, disabled }: Props) {
  const theme = useTheme();
  return (
    <ButtonContainer
      onPress={onPress}
      disabled={disabled}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
