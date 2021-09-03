import styled from 'styled-components/native';
import { colors } from '@styles/';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 0,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Text = styled.Text`
  font-family: RobotoSlab_400Regular;
  font-size: 22px;
  color: ${colors.text};
`;

export const U = styled.Text`
  text-decoration: underline;
`;

export const Inputs = styled.View`
  margin: 20px 0;
`;

export const ActionButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Modal = styled.Modal.attrs({
  animationType: 'slide',
  statusBarTranslucent: true,
  transparent: true,
})``;

export const ModalContent = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SuccessBox = styled.View`
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 250px;
  background-color: ${colors.text};
  border-radius: 37.5px;
  elevation: 25;
  padding: 0 10%;
`;

export const SuccessEmoji = styled.Text`
  font-size: 78px;
  text-align: center;
  margin-bottom: 20px;
`;

export const SuccessText = styled.Text`
  font-family: RobotoSlab_400Regular;
  font-size: 16px;
  text-align: center;
  color: ${colors.background};
`;
