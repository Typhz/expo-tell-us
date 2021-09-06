import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  BackwardButton,
  BackwardIcon,
  Center,
  Container,
  Right,
  Title,
  Left,
} from './styles';

function Header({ dismiss, title, onBackward, style, titleStyle }) {
  const { goBack } = useNavigation();

  return (
    <Container style={style} dismiss={dismiss}>
      <Left>
        <BackwardButton onPress={() => (onBackward ? onBackward() : goBack())}>
          <BackwardIcon />
        </BackwardButton>
      </Left>

      <Center>
        <Title style={titleStyle}>{title}</Title>
      </Center>

      <Right />
    </Container>
  );
}

export default Header;
