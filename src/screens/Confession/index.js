import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/';
import {
  Container,
  ConfessionInfo,
  Content,
  DislikeIcon,
  IconButton,
  InteractionBar,
  Text,
  NextConfessionButton,
  NextConfessionIcon,
  Label,
  LikeIcon,
  ViewsIcon,
  Reactions,
} from './styles';

function Confession() {
  const [showBar, setShowBar] = useState(false);
  const { goBack } = useNavigation();

  const onScrollEndDrag = ({ nativeEvent }) => {
    // if scrolled to top and the bar is hided
    if (nativeEvent.velocity.y > 0 && showBar) {
      setShowBar(false);
    }

    // if scrolled to bottom and the bar is shown
    if (nativeEvent.velocity.y < 0 && !showBar) {
      setShowBar(true);
    }
  };

  return (
    <Container>
      <Header title="Lorem Ipsum" onBackward={goBack} dismiss={false} />

      <Content onScrollEndDrag={onScrollEndDrag}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          libero risus. Donec feugiat felis vel leo lacinia dictum. In quis
          vestibulum urna. Integer eget ex augue. Proin elit magna, egestas eget
          lacinia quis, scelerisque sit amet risus. Ut tempor sapien id est
          fermentum, nec tristique nisl sollicitudin. Aliquam turpis sapien,
          cursus a ante a, gravida convallis urna. {'\n\n'}
          Nunc tempor dolor vitae accumsan lacinia. Nunc a odio quis ligula
          blandit tristique at et enim. Proin fermentum lorem sodales
          condimentum pellentesque. Morbi hendrerit volutpat efficitur. Cras
          dolor arcu, interdum eu finibus vel, consectetur sodales diam. Etiam
          volutpat pulvinar imperdiet. Nullam felis libero, tempor in arcu eget,
          sagittis mollis nibh. Nulla fringilla maximus dui, ut varius tellus
          molestie non. Duis aliquet, risus vitae euismod imperdiet. {'\n\n'}
          Morbi hendrerit volutpat efficitur. Cras dolor arcu, interdum eu
          finibus vel, consectetur sodales diam. Etiam volutpat pulvinar
          imperdiet. Nullam felis libero, tempor in arcu eget, sagittis mollis
          nibh. Nulla fringilla maximus dui, ut varius tellus molestie non. Duis
          aliquet, risus vitae euismod imperdiet.{'\n\n'}
          Nunc tempor dolor vitae accumsan lacinia. Nunc a odio quis ligula
          blandit tristique at et enim. Proin fermentum lorem sodales
          condimentum pellentesque. Morbi hendrerit volutpat efficitur. Cras
          dolor arcu, interdum eu finibus vel, consectetur sodales diam. Etiam
          volutpat pulvinar imperdiet. Nullam felis libero, tempor in arcu eget,
          sagittis mollis nibh. Nulla fringilla maximus dui, ut varius tellus
          molestie non. Duis aliquet, risus vitae euismod imperdiet.
          {'\n\n'}
          Nunc tempor dolor vitae accumsan lacinia. Nunc a odio quis ligula
          blandit tristique at et enim. Proin fermentum lorem sodales
          condimentum pellentesque. Morbi hendrerit volutpat efficitur. Cras
          dolor arcu, interdum eu finibus vel, consectetur sodales diam. Etiam
          volutpat pulvinar imperdiet. Nullam felis libero, tempor in arcu eget,
          sagittis mollis nibh. Nulla fringilla maximus dui, ut varius tellus
          molestie non. Duis aliquet, risus vitae euismod imperdiet. {'\n\n'}
          Morbi hendrerit volutpat efficitur. Cras dolor arcu, interdum eu
          finibus vel, consectetur sodales diam. Etiam volutpat pulvinar
          imperdiet. Nullam felis libero, tempor in arcu eget, sagittis mollis
          nibh. Nulla fringilla maximus dui, ut varius tellus molestie non. Duis
          aliquet, risus vitae euismod imperdiet.{'\n\n'}
          Nunc tempor dolor vitae accumsan lacinia. Nunc a odio quis ligula
          blandit tristique at et enim. Proin fermentum lorem sodales
          condimentum pellentesque. Morbi hendrerit volutpat efficitur. Cras
          dolor arcu, interdum eu finibus vel, consectetur sodales diam. Etiam
          volutpat pulvinar imperdiet. Nullam felis libero, tempor in arcu eget,
          sagittis mollis nibh. Nulla fringilla maximus dui, ut varius tellus
          molestie non. Duis aliquet, risus vitae euismod imperdiet.
        </Text>
      </Content>

      <InteractionBar dismiss={showBar}>
        <Reactions>
          <IconButton>
            <LikeIcon />
            <Label>25</Label>
          </IconButton>
          <IconButton style={{ marginLeft: 28 }}>
            <DislikeIcon />
            <Label>6</Label>
          </IconButton>
        </Reactions>
        <ConfessionInfo>
          <ViewsIcon />
          <Label>423</Label>
        </ConfessionInfo>
      </InteractionBar>

      <NextConfessionButton>
        <NextConfessionIcon />
      </NextConfessionButton>
    </Container>
  );
}

export default Confession;
