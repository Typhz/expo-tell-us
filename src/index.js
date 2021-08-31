import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from '@expo-google-fonts/roboto-slab';

import Navigation from '@navigation/';

function App() {
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular, RobotoSlab_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigation />;
}

export default App;
