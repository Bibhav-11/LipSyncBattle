// LaunchPage.js
import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';

const LaunchPage = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./assets/launch-bg.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Pressable
          style={styles.absolute}
          onPress={() => navigation.navigate('TeamSelect')}>
          <Text
            style={[
              {
                fontFamily: 'BebasNeue-Regular',
                textTransform: 'uppercase',
                color: 'white',
                fontSize: 12,
              },
            ]}>
            Start
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // backgroundColor: '#fff', // Set your background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  absolute: {
    position: 'absolute',
    bottom: '10%',
    backgroundColor: '#5E40B7',
    paddingVertical: 4,
    paddingHorizontal: 23,
    borderRadius: 2,
  },
});

export default LaunchPage;
