import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import {IndexPath, Input, Select, SelectItem} from '@ui-kitten/components';

const numTeamsData = [3, 4, 5, 6, 7, 8, 9, 10];
const TeamPickPage = ({navigation}) => {
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');

  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath>(
    new IndexPath(0),
  );

  const displayValue = numTeamsData[selectedIndex.row];
  console.log(team1Name);

  const startTeamSelect = () => {
    // Navigate to the TeamSelectPage with selected team names and player counts
    navigation.navigate('TeamSelect1', {
      team1: {name: team1Name},
      team2: {name: team2Name},
      numOfTeams: displayValue,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team Pick Phase</Text>

      {/* Team 1 Name Input */}
      <View style={styles.teamContainer}>
        <View>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              color: 'white',
              marginBottom: 10,
            }}>
            Team 1 Name:
          </Text>
          <Input
            size="small"
            textStyle={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              color: 'white',
            }}
            style={{padding: 0, backgroundColor: '#E41F1F', borderWidth: 0}}
            placeholder="Place your Team Name"
            value={team1Name}
            onChangeText={nextValue => setTeam1Name(nextValue)}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              color: 'white',
              marginBottom: 10,
            }}>
            Team 2 Name:
          </Text>
          <Input
            size="small"
            textStyle={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 10,
              color: 'white',
            }}
            style={{padding: 0, backgroundColor: '#E41F1F', borderWidth: 0}}
            placeholder="Place your Team Name"
            value={team2Name}
            onChangeText={nextValue => setTeam2Name(nextValue)}
          />
        </View>
      </View>

      <View>
        <Text>Number of Players for each team</Text>
        <Select
          size="small"
          // style={{backgroundColor: '#E41F1F'}}
          placeholder="Default"
          value={displayValue}
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          {numTeamsData.map(number => (
            <SelectItem key={number} title={number} />
          ))}
        </Select>
      </View>

      {/* Start Team Select Button */}
      <Pressable style={styles.button} onPress={startTeamSelect}>
        <Text
          style={[
            {
              fontFamily: 'BebasNeue-Regular',
              textTransform: 'uppercase',
              color: 'white',
              backgroundColor: '#E41F1F',
              fontSize: 12,
              paddingVertical: 4,
              paddingHorizontal: 23,
              borderRadius: 2,
            },
          ]}>
          Start Team Select
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#101010',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontFamily: 'BebasNeue-Regular',
    marginBottom: 20,
    color: 'white',
    top: 30,
    position: 'absolute',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
  },
  picker: {
    height: 40,
    width: '100%',
    marginBottom: 10,
  },
  button: {
    position: 'absolute',
    bottom: 30,
  },
  teamContainer: {
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
});

export default TeamPickPage;
