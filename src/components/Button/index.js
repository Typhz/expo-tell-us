import React from 'react';
import { Container, Text, Wrapper } from './styles';

function Button({ title, style, ...rest }) {
  return (
    <Wrapper style={style} {...rest}>
      <Container>
        <Text>{title}</Text>
      </Container>
    </Wrapper>
  );
}

export default Button;
