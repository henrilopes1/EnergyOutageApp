import styled from 'styled-components/native';

export const Spacer = styled.View<{ size?: number }>`
  height: ${({ size, theme }) => size || theme.spacing.lg}px;
`;