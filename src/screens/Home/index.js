import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@components/';
import { ActionButtons, Container, Content, Text, Title, U } from './styles';

function Home() {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Content>
        <Text>Bem-vindo,</Text>
        <Title>
          Faça ou veja <U>confissões</U>.
        </Title>
      </Content>

      <ActionButtons>
        <Button
          title="Fazer uma confissão"
          style={{ marginBottom: 10 }}
          onPress={() => navigate('MakeConfession')}
          primary
        />
        <Button
          title="Ver confissões aleatórias"
          onPress={() => navigate('Confession')}
        />
      </ActionButtons>
    </Container>
  );
}

export default Home;
