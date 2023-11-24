import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  ImageBackground,
} from 'react-native';
import SoundLevel from 'react-native-sound-level';

import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from 'react-native-cool-speedometer';
import {Pressable} from 'native-base';

const ScreamBattlePage = ({navigation, route}) => {
  const {team1, team2} = route.params;

  const [winnerStat, setWinnerStat] = useState([]);

  const [currentMember, setCurrentMember] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [soundLevel, setSoundLevel] = useState(0);

  const [decibels, setDecibels] = useState([]);
  const [score, setScore] = useState(0);

  const [team1Scores, setTeam1Scores] = useState([]);
  const [team2Scores, setTeam2Scores] = useState([]);

  const handleTeamWinner = () => {
    const team1Score = team1Scores.reduce((acc, team) => acc + team.score, 0);
    const team2Score = team2Scores.reduce((acc, team) => acc + team.score, 0);
    return team1Score > team2Score ? team1Scores : team2Scores;
  };

  // console.log(soundLevel);

  // console.log(decibels);

  // useEffect(() => {
  //   if (currentMember && isRecording) {
  //     // Start recording sound level
  //     SoundLevel.start();
  //     SoundLevel.onNewFrame = data => {
  //       // Update sound level
  //       console.log(data.value);
  //       setSoundLevel(data.value);
  //     };
  //   } else {
  //     // Stop recording sound level
  //     SoundLevel.stop();
  //   }

  //   return () => {
  //     // Cleanup on component unmount
  //     SoundLevel.stop();
  //   };
  // }, [currentMember, isRecording]);

  const requestAudioPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Lip Sync Battle App Permission',
          message: 'Lip Sync Battle needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the microphone');
      } else {
        console.log('Microphone permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestAudioPermission();

    return () => {
      // Cleanup on component unmount
      SoundLevel.stop();
    };
  }, []);

  const handleStartRecording = () => {
    setIsRecording(true);
    setDecibels([]);
    setScore(0);

    if (currentMember) {
      SoundLevel.start();
      SoundLevel.onNewFrame = data => {
        // Update sound level
        const currentDecibel = Math.round(0.403 * data.value + 95.98);
        setSoundLevel(currentDecibel);
        // console.log(data.value);
        setDecibels(prev => [...prev, currentDecibel]);
        // console.log(currentDecibel);
      };
    }
  };

  const handleStopRecording = () => {
    console.log(decibels);
    const score = Math.max(...decibels);
    setScore(score);
    if (team1.includes(currentMember)) {
      setTeam1Scores(prev => [...prev, {name: currentMember, score: score}]);
    } else {
      setTeam2Scores(prev => [...prev, {name: currentMember, score: score}]);
    }
    console.log(team1Scores, team2Scores);
    setIsRecording(false);
    SoundLevel.stop();
  };

  const handleMemberPress = member => {
    setCurrentMember(member);
    setIsRecording(false); // Stop recording if a new member is selected
  };

  return (
    <ImageBackground
      source={require('./assets/Background.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.teamTitle}>
          <View style={[styles.member, {width: 200}]}>
            <Text
              style={{
                fontFamily: 'BebasNeue-Regular',
                color: 'white',
                textAlign: 'center',
              }}>
              Team1
            </Text>
          </View>
          <View style={[styles.member, {width: 200}]}>
            <Text
              style={{
                fontFamily: 'BebasNeue-Regular',
                color: 'white',
                textAlign: 'center',
              }}>
              Team2
            </Text>
          </View>
        </View>

        <View style={styles.teamContainer}>
          <View style={[styles.membersContainer, {marginRight: 20}]}>
            {team1.map(member => (
              <TouchableOpacity
                key={member}
                style={[
                  styles.member,
                  currentMember === member && styles.selectedMember,
                ]}
                onPress={() => handleMemberPress(member)}
                disabled={isRecording}>
                <Text
                  style={{
                    fontFamily: 'BebasNeue-Regular',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  {member}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {score ? (
            <View style={styles.gaugeContainer}>
              <Text
                style={{
                  color: '#FBABFF',
                  fontFamily: 'BebasNeue-Regular',
                  fontSize: 60,
                }}>
                SCORE: {score}
              </Text>
            </View>
          ) : null}

          {!score ? (
            <View style={styles.gaugeContainer}>
              {/* Your gauge component goes here */}
              <Text style={{fontFamily: 'BebasNeue-Regular'}}>
                <Speedometer value={soundLevel} fontFamily="BebasNeue-Regular">
                  <Background />
                  <Arc />
                  <Needle />
                  <Progress />
                  <Marks />
                  <Indicator fixValue={true} />
                </Speedometer>
              </Text>
            </View>
          ) : null}

          <View style={styles.membersContainer}>
            {team2.map(member => (
              <TouchableOpacity
                key={member}
                style={[
                  styles.member,
                  currentMember === member && styles.selectedMember,
                ]}
                onPress={() => handleMemberPress(member)}
                disabled={isRecording}>
                <Text
                  style={{
                    fontFamily: 'BebasNeue-Regular',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  {member}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.startButton,
              !currentMember || (isRecording && styles.disabledButton),
            ]}
            onPress={handleStartRecording}
            disabled={!currentMember || isRecording}>
            <Text style={{fontFamily: 'BebasNeue-Regular'}}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.stopButton, !isRecording && styles.disabledButton]}
            onPress={handleStopRecording}
            disabled={!isRecording}>
            <Text style={{fontFamily: 'BebasNeue-Regular'}}>Stop</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.stopButton]}
            onPress={() => {
              const teamWinner = handleTeamWinner();
              navigation.navigate('Winner', {teamWinner});
            }}>
            <Text style={{fontFamily: 'BebasNeue-Regular'}}>Finish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    columnGap: 100,
    alignItems: 'center',
  },
  teamContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  teamTitle: {
    flexDirection: 'row',
    borderColor: 'white',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  membersContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  member: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#5E40B7',
    marginBottom: 8,
  },
  selectedMember: {
    backgroundColor: '#FBABFF', // Change to your desired selected color
  },
  gaugeContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    columnGap: 10,
    position: 'absolute',
    bottom: 10,
  },
  startButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#5E40B7', // Change to your desired button color
  },
  stopButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#FBABFF', // Change to your desired button color
  },
  disabledButton: {
    opacity: 0.5,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default ScreamBattlePage;
