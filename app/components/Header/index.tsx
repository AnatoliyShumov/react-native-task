import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomHeader = ({title, onLeftPress, onRightPress}) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={onLeftPress}>
      <Text>Ліво</Text>
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={onRightPress}>
      <Text>Право</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'red', // змініть на потрібний колір
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
