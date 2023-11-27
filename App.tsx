/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import * as eva from '@eva-design/eva';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Orientation from 'react-native-orientation-locker';

import LaunchPage from './LaunchPage';
import TeamSelectPage from './TeamSelectPage';
import GameLoadingPage from './GameLoadingPage';
import ScreamBattlePage from './ScreamBattlePage';
import WinnerPage from './WinnerPage';
import MVPSVPPage from './MVPSVPPage';
import {NativeBaseProvider} from 'native-base';
import TeamPickPage from './TeamPickPage';
import {ApplicationProvider} from '@ui-kitten/components';
import LaunchPage1 from './LaunchPage1';
import TeamSelectPage1 from './TeamSelectPage1';

const Stack = createStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    // Lock the orientation to landscape when the app starts
    Orientation.lockToLandscape();
    return () => {
      // Unlock the orientation when the app is unmounted
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <NativeBaseProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <StatusBar hidden={true} />
          <Stack.Navigator initialRouteName="LaunchPage1">
            <Stack.Screen
              name="LaunchPage"
              component={LaunchPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="LaunchPage1"
              component={LaunchPage1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TeamPick"
              component={TeamPickPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TeamSelect"
              component={TeamSelectPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TeamSelect1"
              component={TeamSelectPage1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="GameLoading"
              component={GameLoadingPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ScreamBattle"
              component={ScreamBattlePage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Winner"
              component={WinnerPage}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="MVPSVP"
              component={MVPSVPPage}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
