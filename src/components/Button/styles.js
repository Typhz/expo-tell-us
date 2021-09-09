import styled from 'styled-components/native';
import { tint } from 'polished';
import { colors } from '@styles/';

export const Container = styled.Pressable.attrs((props) => ({
  android_ripple: {
    color: props.primary ? colors.background : colors.primary,
  },
}))`
  align-items: center;
  background-color: ${({ primary }) =>
    primary ? colors.primary : colors.background};
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  height: 60px;
  justify-content: center;
  width: 100%;
`;

export const Text = styled.Text`
  font-family: RobotoSlab_400Regular;
  font-size: 16px;
  text-align: center;
  color: ${tint(0.1, colors.text)};
`;
