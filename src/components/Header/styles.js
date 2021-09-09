import styled from 'styled-components/native';
import { MotiSafeAreaView } from 'moti';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@styles/';

export const Container = styled(MotiSafeAreaView).attrs((props) => ({
  animate: { top: props.dismiss ? -100 : 0 },
  transition: {
    type: 'timing',
    duration: 450,
  },
}))`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${StatusBar.currentHeight}px 16px 0 16px;
  height: ${44 + StatusBar.currentHeight}px;
  width: 100%;
  margin-bottom: 5px;
`;

export const Left = styled.View``;

export const Center = styled.View``;

export const Right = styled.View``;

export const BackwardButton = styled.Pressable.attrs({
  android_ripple: {
    color: colors.primary,
    borderless: true,
  },
  hitSlop: 6,
})`
  align-items: center;
  justify-content: center;
  left: -6px;
`;

export const BackwardIcon = styled(Ionicons).attrs({
  name: 'chevron-back',
  size: 22,
  color: colors.text,
})``;

export const Title = styled.Text`
  font-family: RobotoSlab_500Medium;
  font-size: 16px;
  color: ${colors.text};
`;
