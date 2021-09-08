import styled from 'styled-components/native';
import { MotiView } from 'moti';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { shade, tint } from 'polished';
import { colors } from '@styles/';

const { height: screenHeight, width: screenWidth } = Dimensions.get('screen');

export const Container = styled.View`
  background-color: ${colors.background};
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 0,
  },
})``;

export const Text = styled.Text.attrs({
  selectable: true,
  selectionColor: tint(0.2, colors.primary),
})`
  color: ${colors.text};
  font-family: RobotoSlab_400Regular;
  font-size: 14px;
`;

export const NextConfessionButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: 40px;
  bottom: ${screenHeight * 0.35}px;
  height: 80px;
  justify-content: center;
  left: ${screenWidth - 28}px;
  opacity: 0.5;
  padding-left: 6px;
  position: absolute;
  width: 80px;
`;

export const NextConfessionIcon = styled(Ionicons).attrs({
  color: colors.text,
  name: 'chevron-forward',
  size: 20,
})``;

export const InteractionBar = styled(MotiView).attrs((props) => ({
  animate: { bottom: props.dismiss ? -100 : 16 },
  transition: {
    type: 'timing',
    duration: 450,
  },
}))`
  align-items: center;
  align-self: center;
  background-color: ${colors.primary};
  border: 1px solid ${shade(0.1, colors.primary)};
  border-radius: 12px;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  padding: 0px 24px;
  position: absolute;
  width: ${screenWidth - 32}px;
`;

export const Reactions = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ConfessionInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const IconButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
`;

export const LikeIcon = styled(Feather).attrs({
  color: tint(0.1, colors.text),
  name: 'thumbs-up',
  size: 20,
})``;

export const DislikeIcon = styled(LikeIcon).attrs({
  name: 'thumbs-down',
})``;

export const ViewsIcon = styled(Ionicons).attrs({
  color: tint(0.1, colors.text),
  name: 'eye-outline',
  size: 28,
})``;

export const Label = styled.Text`
  color: ${tint(0.1, colors.text)};
  font-family: RobotoSlab_400Regular;
  font-size: 16px;
  margin-left: 5px;
`;
