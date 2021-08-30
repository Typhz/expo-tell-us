import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${colors.text};
`;
