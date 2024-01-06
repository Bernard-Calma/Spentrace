import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';

import {Header, MainScreen} from './src/components';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "roboto": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) return null
  else return (
    <Provider store = {store}>
      <SafeAreaView style={{flex: 1}} onLayout={onLayoutRootView}>
        <Header />
        <MainScreen />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Roboto",
    borderWidth: 1,
    borderColor: "red"
  },
});
