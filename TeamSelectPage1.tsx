import {Input} from '@ui-kitten/components';
import {Select, Text} from 'native-base';
import {useState} from 'react';
import {
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

const allMembers = ['Arun', 'Ramesh', 'Sanish', 'Abish', 'Sujan', 'Parbati'];

const TeamSelectPage1 = ({navigation, route}) => {
  const {team1, team2, numOfTeams} = route.params;
  const [selectedTeamMembers1, setSelectedTeamMembers1] = useState(
    Array(numOfTeams).fill(null),
  );
  const [selectedTeamMembers2, setSelectedTeamMembers2] = useState(
    Array(numOfTeams).fill(null),
  );

  const handleSelectTeam1Member = (member, index) => {
    const updatedMembers = [...selectedTeamMembers1];
    updatedMembers[index] = member;
    setSelectedTeamMembers1(updatedMembers);
  };

  const handleSelectTeam2Member = (member, index) => {
    const updatedMembers = [...selectedTeamMembers2];
    updatedMembers[index] = member;
    setSelectedTeamMembers2(updatedMembers);
  };

  console.log(selectedTeamMembers1, selectedTeamMembers2);

  return (
    <View style={styles.container}>
      <View style={styles.teamTitle}>
        <View style={[styles.member, {width: 200}]}>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              color: 'white',
              textAlign: 'center',
            }}>
            {team1.name}
          </Text>
        </View>
        <View style={[styles.member, {width: 200}]}>
          <Text
            style={{
              fontFamily: 'BebasNeue-Regular',
              color: 'white',
              textAlign: 'center',
            }}>
            {team2.name}
          </Text>
        </View>
      </View>

      <View style={styles.teamContainer}>
        <View style={{gap: 10}}>
          {selectedTeamMembers1.map((value, index) => (
            <Input
              size="small"
              textStyle={{
                fontFamily: 'OpenSans-Regular',
                fontSize: 10,
                color: 'white',
              }}
              style={{padding: 0, backgroundColor: '#E41F1F', borderWidth: 0}}
              placeholder="Enter player name"
              value={value}
              onChangeText={nextValue =>
                handleSelectTeam1Member(nextValue, index)
              }
            />
          ))}
        </View>
        <View style={{gap: 10}}>
          {selectedTeamMembers2.map((value, index) => (
            <Input
              size="small"
              textStyle={{
                fontFamily: 'OpenSans-Regular',
                fontSize: 10,
                color: 'white',
              }}
              style={{padding: 0, backgroundColor: '#E41F1F', borderWidth: 0}}
              placeholder="Enter player name"
              value={value}
              onChangeText={nextValue =>
                handleSelectTeam2Member(nextValue, index)
              }
            />
          ))}
        </View>
      </View>

      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate('ScreamBattle', {
            team1: selectedTeamMembers1,
            team2: selectedTeamMembers2,
          })
        }>
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
  //   background: {flex: 1, resizeMode: 'cover'},
  container: {
    flex: 1,
    justifyContent: 'center',
    columnGap: 100,
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  teamTitle: {
    flexDirection: 'row',
    borderColor: 'white',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  member: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#E41F1F',
    marginBottom: 8,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    position: 'absolute',
    bottom: '0%',
    paddingVertical: 4,
    paddingHorizontal: 23,
    borderRadius: 2,
  },
});

export default TeamSelectPage1;
