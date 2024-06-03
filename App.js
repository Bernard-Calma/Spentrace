import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import {Header} from './src/components';
import LandingPage from './src/views/LandingPage';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Roboto": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "FiraCode": require("./assets/fonts/Fira_Code/static/FiraCode-Regular.ttf"),
    "FiraCode-bold": require("./assets/fonts/Fira_Code/static/FiraCode-Bold.ttf")
  })

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])

  if(!fontsLoaded) return undefined
  else SplashScreen.hideAsync();
  
  return (
    <Provider store = {store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <LandingPage />
        <StatusBar style="auto" />
      </SafeAreaView>
    </Provider>

  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "Roboto",
    // borderWidth: 1,
    // borderColor: "red",
    paddingTop: 50,
  },
});
