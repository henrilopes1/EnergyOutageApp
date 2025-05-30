import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.h1.size}px;
  font-weight: ${({ theme }) => theme.typography.h1.weight};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 0.5px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  text-shadow: 0px 0px 8px ${({ theme }) => theme.colors.primary}40;
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.h2.size}px;
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  letter-spacing: 0.25px;
`;