import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_500Medium,
} from '@expo-google-fonts/roboto-slab';
import Home from './screens/Home';

function App() {
  let [fontsLoaded] = useFonts({ RobotoSlab_400Regular, RobotoSlab_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Home />;
}

export default App;
