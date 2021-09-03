import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Header, Input } from '@components/';
import {
  ActionButtons,
  Content,
  Inputs,
  Text,
  U,
  Container,
  Modal,
  SuccessBox,
  SuccessEmoji,
  SuccessText,
  ModalContent,
} from './styles';

function MakeConfession() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [confession, setConfession] = useState('');
  const [title, setTitle] = useState('');
  const { goBack } = useNavigation();

  const handlePublish = () => {
    if (!confession) {
      Alert.alert('Erro ao publicar', 'Nenhuma confissão foi escrita.');
      return;
    }

    setIsModalVisible(true);
  };

  const handleDelete = () => {
    setTitle('');
    setConfession('');
  };

  return (
    <Container>
      <Header onBackward={goBack} />

      <Content>
        <Text>
          Confesse seus segredos mais profundos e sombrios de forma{' '}
          <U>anônima</U>.
        </Text>
        <Inputs>
          <Input
            label="Título"
            placeholder="Esfaqueei meu padrasto"
            onChangeText={setTitle}
            value={title}
            style={{ marginBottom: 10 }}
          />
          <Input
            label="Confissão"
            placeholder="Quanto eu tinha 18 anos..."
            onChangeText={setConfession}
            value={confession}
            textAlignVertical="top"
            inputStyle={{ height: 300 }}
            required
          />
        </Inputs>
        <ActionButtons>
          <Button
            title="Excluir"
            onPress={handleDelete}
            style={{ width: '29%' }}
          />
          <Button
            title="Publicar"
            onPress={handlePublish}
            style={{ width: '69%' }}
            primary
          />
        </ActionButtons>
      </Content>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <ModalContent onPress={() => setIsModalVisible(false)}>
          <SuccessBox>
            <SuccessEmoji>🎉</SuccessEmoji>
            <SuccessText>Confissão feita com Sucesso</SuccessText>
          </SuccessBox>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default MakeConfession;
