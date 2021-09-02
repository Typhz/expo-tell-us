import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { tint } from 'polished';
import { colors } from '@styles/';

export const Container = styled.View`
  flex: 1;
  padding: ${StatusBar.currentHeight}px 16px 16px 16px;
  background-color: ${colors.background};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Text = styled.Text`
  font-family: RobotoSlab_400Regular;
  font-size: 16px;
  color: ${tint(0.5, colors.text)};
`;

export const Title = styled.Text`
  font-family: RobotoSlab_500Medium;
  font-size: 44px;
  color: ${colors.text};
`;

export const U = styled.Text`
  text-decoration: underline;
`;

export const ActionButtons = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
