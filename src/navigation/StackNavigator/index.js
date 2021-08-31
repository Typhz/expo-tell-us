import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { Confession, Home, MakeConfession } from '@screens/';

const { Navigator, Screen } = createStackNavigator();

function StackNavigator() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardShadowEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Screen name="Confession" component={Confession} />
      <Screen name="Home" component={Home} />
      <Screen name="MakeConfession" component={MakeConfession} />
    </Navigator>
  );
}

export default StackNavigator;
