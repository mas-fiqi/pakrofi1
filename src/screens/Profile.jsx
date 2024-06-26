// screens/Profile.js
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import IconMenu from '../component/IconMenu';

const Data = [
  {id: 1, label: 'Top Up'},
  {id: 2, label: 'Diskon'},
  {id: 3, label: 'Go Food'},
  {id: 4, label: 'Grab'},
  {id: 5, label: 'Gojek'},
];

const Profile = ({navigation}) => {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={({item}) => <IconMenu label={item.label} />}
        horizontal={true}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.btn}>
        <Text style={styles.txt}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
        style={styles.btn}>
        <Text style={styles.txt}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

// import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
// import React from 'react';
// import IconMenu from '../component/IconMenu';

// const Data = [
//   {id: 1, label: 'Top Up'},
//   {id: 2, label: 'Diskon'},
//   {id: 3, label: 'Go Food'},
//   {id: 4, label: 'Grab'},
//   {id: 5, label: 'Gojek'},
// ];

// const Profile = ({navigation}) => {
//   return (
//     <View>
//       <FlatList
//         data={Data}
//         renderItem={({item}) => <IconMenu label={item.label} />}
//         horizontal={true}
//       />
//       <TouchableOpacity
//         onPress={() => navigation.navigate('Home')}
//         style={styles.btn}>
//         <Text style={styles.txt}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => navigation.navigate('About')}
//         style={styles.btn}>
//         <Text style={styles.txt}>About</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   btn: {
//     margin: 10,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//     backgroundColor: 'green',
//   },
//   txt: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });
