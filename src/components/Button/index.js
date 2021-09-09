import React from 'react';
import { Text, Container } from './styles';

function Button({ children, title, style, ...rest }) {
  return (
    <Container style={style} {...rest}>
      <Text>{title}</Text>
      {children}
    </Container>
  );
}

export default Button;
