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
import {useNavigation} from '@react-navigation/native';

const CustomHeader = ({
  title = '',
  onLeftPress = () => {},
  onRightPress = () => {},
}) => {
  const userData = useSelector((state: RootState) => state.user);
  const navigation = useNavigation();
  return (
    <View style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Table')}>
          <RocketYellow />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <AvatarCircle
            url={userData.avatarUser}
            size={45}
            defaultImage={false}
            borderWidth={2}
            name={''}
            borderColor="rgba(110, 91, 125, 1)"
            containerStyles={{backgroundColor: '#DADADA'}}
            onPress={() => navigation.navigate('Settings')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#292F3D', // Same as header background
    // For Android, make sure the status bar color matches
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: 'row',
    height: 110,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#4D5265',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 45,
    height: 45,
  },
});

export default CustomHeader;
