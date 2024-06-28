import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const IconMenu = ({label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textIcon}>Ikon</Text>
      </View>
      <Text style={styles.textIcon}>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconMenu;

const styles = StyleSheet.create({
  container: {
    //borderWidth: 1,
    margin: 10,
    padding: 5,
    width: 80,
    justifyContent: 'center',
    alignContent: 'center',
  },
  box: {
    borderWidth: 1,
    width: 73,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 110,
  },
  textIcon: {
    color: 'black',
    textAlign: 'center',
  },
});
