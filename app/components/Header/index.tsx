import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AvatarCircle} from '../AvatarCircle';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';

const CustomHeader = ({title, onLeftPress, onRightPress}) => {
  const userData = useSelector((state: RootState) => state.user);
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onLeftPress}>
        <Text>Ліво</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onRightPress}>
        <AvatarCircle
          url={userData.avatarUser}
          size={50}
          defaultImage={false}
          borderWidth={2}
          name={''}
          borderColor="rgba(110, 91, 125, 1)"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#4D5265',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
