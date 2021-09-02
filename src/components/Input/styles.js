import styled from 'styled-components/native';
import { colors } from '@styles/';
import { tint } from 'polished';

export const Container = styled.View``;

export const Label = styled.Text`
  font-family: RobotoSlab_400Regular;
  font-size: 14px;
  color: ${colors.text};
  margin-bottom: 5px;
`;

export const TextInput = styled.TextInput.attrs({
  multiline: true,
  selectionColor: tint(0.2, colors.primary),
})`
  font-family: RobotoSlab_400Regular;
  color: ${tint(0.1, colors.text)};
  border: 2px solid ${tint(0.8, colors.text)};
  border-radius: 10px;
  padding: 10px;
  height: 50px;
  width: 100%;
`;
