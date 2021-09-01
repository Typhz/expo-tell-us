import styled from 'styled-components/native';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@styles/';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
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

export const BackwardIcon = styled(Ionicons).attrs({
  name: 'chevron-back',
  size: 22,
  color: colors.text,
})``;

export const BackwardButton = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: RobotoSlab_500Medium;
  font-size: 16px;
  color: ${colors.text};
`;
