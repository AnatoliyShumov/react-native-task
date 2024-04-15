import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import {AvatarCircle} from '../AvatarCircle';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store.ts';
import RocketYellow from '../../assets/images/components/RocketYellow.tsx';

const CustomHeader = ({title, onLeftPress, onRightPress}) => {
  const userData = useSelector((state: RootState) => state.user);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onLeftPress}>
          <RocketYellow />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onRightPress}>
          <AvatarCircle
            url={userData.avatarUser}
            size={45}
            defaultImage={false}
            borderWidth={2}
            name={''}
            borderColor="rgba(110, 91, 125, 1)"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#292F3D', // Same as header background
    // For Android, make sure the status bar color matches
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
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
