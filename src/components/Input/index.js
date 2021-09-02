import React from 'react';
import { Container, Label, TextInput } from './styles';

function Input({ label, required, style, inputStyle, ...rest }) {
  return (
    <Container style={style}>
      <Label>{required ? `* ${label}` : label}</Label>
      <TextInput style={inputStyle} {...rest} />
    </Container>
  );
}

export default Input;
