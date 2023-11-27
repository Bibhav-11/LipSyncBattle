// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// import {Select} from 'native-base';

import {Select, Text} from 'native-base';
import {useState} from 'react';
import {
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

// const TeamSelectPage = ({navigation}) => {
//   const allMembers = ['Arun', 'Ramesh', 'Sanish', 'Abish', 'Sujan'];
//   const [selectedTeamMembers1, setSelectedTeamMembers1] = useState(
//     Array(3).fill(null),
//   );
//   const [selectedTeamMembers2, setSelectedTeamMembers2] = useState(
//     Array(3).fill(null),
//   );

//   const handleSelectTeam1Member = (member, index) => {
//     const updatedMembers = [...selectedTeamMembers1];
//     updatedMembers[index] = member;
//     setSelectedTeamMembers1(updatedMembers);
//   };

//   return (
//     // <View>
//     //   {selectedTeamMembers1.map((selectedMember, index) => (
//     //     <Select
//     //       key={index}
//     //       placeholder="Select member"
//     //       selectedValue={selectedMember}
//     //       width={150}
//     //       onValueChange={(itemValue: string) =>
//     //         handleSelectTeam1Member(itemValue, index)
//     //       }>
//     //       {allMembers.map((member, index) => (
//     //         <Select.Item key={member} label={member} value={member} />
//     //       ))}
//     //     </Select>
//     //   ))}
//     // </View>

//     <ImageBackground
//       source={require('./assets/Background.png')}
//       style={styles.background}>
//       <View style={styles.container}>
//         <View style={styles.teamTitle}>
//           <View style={[styles.member, {width: 200}]}>
//             <Text
//               style={{
//                 fontFamily: 'BebasNeue-Regular',
//                 color: 'white',
//                 textAlign: 'center',
//               }}>
//               Team1
//             </Text>
//           </View>
//           <View style={[styles.member, {width: 200}]}>
//             <Text
//               style={{
//                 fontFamily: 'BebasNeue-Regular',
//                 color: 'white',
//                 textAlign: 'center',
//               }}>
//               Team2
//             </Text>
//           </View>
//         </View>

//         <View style={styles.teamContainer}>
//           <View style={[styles.membersContainer]}>
//             {selectedTeamMembers1.map((selectedMember, index) => (
//               <Select
//                 key={index}
//                 placeholder="Select member"
//                 selectedValue={selectedMember}
//                 width={150}
//                 onValueChange={(itemValue: string) =>
//                   handleSelectTeam1Member(itemValue, index)
//                 }>
//                 {allMembers.map((member, index) => (
//                   <Select.Item key={member} label={member} value={member} />
//                 ))}
//               </Select>
//             ))}
//           </View>

//           {/* <View style={styles.gaugeContainer}>

//           </View> */}

//           <View style={styles.membersContainer}></View>
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[styles.stopButton]}
//             onPress={navigation.navigate('ScreamBattle')}>
//             <Text style={{fontFamily: 'BebasNeue-Regular'}}>Stop</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     columnGap: 100,
//     alignItems: 'center',
//   },
//   teamContainer: {
//     flexDirection: 'row',
//     // justifyContent: 'space-around',
//     // alignItems: 'center',
//     margin: 0,
//     padding: 0,
//   },
//   teamTitle: {
//     flexDirection: 'row',
//     borderColor: 'white',
//     justifyContent: 'space-between',
//     width: '100%',
//     position: 'absolute',
//     top: 0,
//   },
//   membersContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   member: {
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     backgroundColor: '#5E40B7',
//     marginBottom: 8,
//   },
//   selectedMember: {
//     backgroundColor: '#FBABFF', // Change to your desired selected color
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     columnGap: 10,
//     position: 'absolute',
//     bottom: 10,
//   },
//   startButton: {
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     backgroundColor: '#5E40B7', // Change to your desired button color
//   },
//   stopButton: {
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     backgroundColor: '#FBABFF', // Change to your desired button color
//   },
//   disabledButton: {
//     opacity: 0.5,
//   },
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
// });

// export default TeamSelectPage;

const TeamSelectPage = ({navigation, route}) => {
  const allMembers = ['Arun', 'Ramesh', 'Sanish', 'Abish', 'Sujan', 'Parbati'];
  const [selectedTeamMembers1, setSelectedTeamMembers1] = useState(
    Array(3).fill(null),
  );
  const [selectedTeamMembers2, setSelectedTeamMembers2] = useState(
    Array(3).fill(null),
  );

  const {team1, team2, numOfTeams} = route.params;

  console.log(team1, team2, numOfTeams);

  // console.log(selectedTeamMembers1, selectedTeamMembers2);

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
          <View>
            {selectedTeamMembers1.map((selectedMember, index) => (
              <Select
                style={{fontFamily: 'BebasNeue-Regular'}}
                key={index}
                color="white"
                placeholder="Select member"
                variant="unstyled"
                selectedValue={selectedMember}
                width={150}
                onValueChange={(itemValue: string) =>
                  handleSelectTeam1Member(itemValue, index)
                }>
                {allMembers.map((member, index) => (
                  <Select.Item
                    style={{fontFamily: 'BebasNeue-Regular'}}
                    key={member}
                    label={member}
                    value={member}
                  />
                ))}
              </Select>
            ))}
          </View>

          <View>
            {selectedTeamMembers2.map((selectedMember, index) => (
              <Select
                style={{fontFamily: 'BebasNeue-Regular'}}
                key={index}
                placeholder="Select member"
                color="white"
                variant="unstyled"
                selectedValue={selectedMember}
                width={150}
                onValueChange={(itemValue: string) =>
                  handleSelectTeam2Member(itemValue, index)
                }>
                {allMembers.map((member, index) => (
                  <Select.Item key={member} label={member} value={member} />
                ))}
              </Select>
            ))}
          </View>
        </View>

        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate('GameLoading', {
              selectedTeamMembers1,
              selectedTeamMembers2,
            })
          }>
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
  background: {flex: 1, resizeMode: 'cover'},
  container: {
    flex: 1,
    justifyContent: 'center',
    columnGap: 100,
    alignItems: 'center',
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
    backgroundColor: '#5E40B7',
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
    backgroundColor: '#5E40B7',
    paddingVertical: 4,
    paddingHorizontal: 23,
    borderRadius: 2,
  },
});

export default TeamSelectPage;
