import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const playerStatsData = [
  {id: '1', name: 'Player 1', score: 120},
  {id: '2', name: 'Player 2', score: 100},
  {id: '3', name: 'Player 3', score: 90},
  {id: '4', name: 'Player 4', score: 80},
  // Add more player stats as needed
];

const MVPSVPPage = () => {
  // Assuming the playerStatsData is sorted in descending order based on the score
  const mvp = playerStatsData[0];
  const svp = playerStatsData[1];

  const renderItem = ({item}) => (
    <View style={styles.playerStatsCard}>
      <Text style={styles.playerStatsName}>{item.name}</Text>
      <Text style={styles.playerStatsScore}>{item.score} points</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MVP, SVP, and Player Stats</Text>

      <View style={{flexDirection: 'row'}}>
        {/* MVP and SVP Cards in a Horizontal Row */}
        <View style={styles.mvpSvpRow}>
          {/* MVP Card */}
          <View style={styles.mvpCard}>
            <Text style={styles.mvpLabel}>MVP:</Text>
            <Text style={styles.mvpName}>{mvp.name}</Text>
            <Text style={styles.mvpScore}>{mvp.score} points</Text>
          </View>

          {/* SVP Card */}
          <View style={styles.svpCard}>
            <Text style={styles.svpLabel}>SVP:</Text>
            <Text style={styles.svpName}>{svp.name}</Text>
            <Text style={styles.svpScore}>{svp.score} points</Text>
          </View>
        </View>

        {/* Player Stats */}
        <FlatList
          data={playerStatsData}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal={true}
          contentContainerStyle={styles.statsContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  mvpSvpRow: {
    flexDirection: 'row',
  },
  mvpCard: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginRight: 16,
  },
  mvpLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  mvpName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  mvpScore: {
    fontSize: 16,
    color: '#333',
  },
  svpCard: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginLeft: 16,
  },
  svpLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  svpName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  svpScore: {
    fontSize: 16,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  playerStatsCard: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 100, // Adjust the width as needed
  },
  playerStatsName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  playerStatsScore: {
    fontSize: 16,
    color: '#333',
  },
});

export default MVPSVPPage;
