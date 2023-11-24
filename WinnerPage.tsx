import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';

const winnersData = [
  {id: '1', name: 'Player 1', image: require('./assets/VS.png')},
  {id: '2', name: 'Player 2', image: require('./assets/VS.png')},
  {id: '3', name: 'Player 2', image: require('./assets/VS.png')},
  {id: '4', name: 'Player 2', image: require('./assets/VS.png')},
  {id: '5', name: 'Player 2', image: require('./assets/VS.png')},
  // Add more winners as needed
];

const WinnerPage = ({navigation, route}) => {
  const {teamWinner} = route.params;

  const renderItem = teamWinner.map((item, index) => (
    <View key={index} style={styles.memberCard}>
      <Image
        source={require('./assets/avatar.jpg')}
        style={styles.memberImage}
      />
      <Text style={[styles.memberName]}>
        {item.name}
        {'\n'}Score: {item.score}
      </Text>
    </View>
  ));

  return (
    <Pressable style={{flex: 1}} onPress={() => navigation.navigate('MVPSVP')}>
      <ImageBackground
        source={require('./assets/Background.png')}
        style={styles.background}>
        <View style={styles.container}>
          <Text
            style={[
              styles.title,
              {fontFamily: 'BebasNeue-Regular', color: 'white'},
            ]}>
            Winners
          </Text>
          <View style={{flexDirection: 'row', columnGap: 20}}>
            {renderItem}
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff', // Set your background color
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Set your text color
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  winnerCard: {
    marginBottom: 16,
    backgroundColor: '#e6e6e6', // Set card background color
    padding: 16,
    alignItems: 'center',
    marginRight: 10,
  },
  winnerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  winnerName: {
    fontSize: 18,
    color: '#333', // Set text color
  },
  memberCard: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FBABFF',
  },
  memberImage: {
    width: 120,
    height: 180,
    marginBottom: 8,
    // Add any additional styling for the member image
  },
  memberName: {
    fontSize: 12,
    fontFamily: 'BebasNeue-Regular',
    paddingVertical: 5,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#5E40B7',
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
});

export default WinnerPage;
