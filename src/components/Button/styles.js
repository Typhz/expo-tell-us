import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { shade, tint } from 'polished';
import { colors } from '@styles/';

export const Wrapper = styled(RectButton).attrs((props) => ({
  exclusive: false,
  rippleColor: props.primary ? colors.background : colors.primary,
}))`
  width: 100%;
  height: 60px;
  background-color: ${({ primary }) =>
    primary ? colors.primary : colors.background};
  border-radius: 8px;
  elevation: 5;
  shadow-offset: 0px 2px;
  shadow-color: ${shade(0.1, colors.primary)};
  shadow-radius: 8px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid ${shade(0.1, colors.primary)};
`;

export const Text = styled.Text`
  font-family: RobotoSlab_400Regular;
  font-size: 16px;
  text-align: center;
  color: ${tint(0.1, colors.text)};
`;