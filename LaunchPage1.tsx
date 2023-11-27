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

const LaunchPage1 = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./assets/background2.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('TeamPick')}>
          <Text
            style={[
              {
                fontFamily: 'OpenSans-Regular',
                color: 'white',
                fontSize: 10,
                textTransform: 'uppercase',
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
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  button: {
    position: 'absolute',
    bottom: '10%',
    backgroundColor: '#E41F1F',
    paddingVertical: 4,
    paddingHorizontal: 23,
    borderRadius: 2,
  },
});

export default LaunchPage1;
